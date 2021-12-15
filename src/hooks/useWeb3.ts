import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { useCallback, useEffect, useState } from "react"
import { useEffectOnce } from "usehooks-ts"
import { AbiItem } from "web3-utils"

import SpaceDicks from '../contracts/SpaceDicks.json'

const supportedChainIds = [
  137, // Polygon 
  1337, // Localhost ganache 
  80001 // Polygon testnet: Mumbai
]

export const injected = new InjectedConnector({ supportedChainIds })

function useWeb3() {
  const web3React = useWeb3React()
  const [mintedId, setMintedId] = useState("")
  const { active, account, library: web3, connector, activate, deactivate, chainId } = web3React

  console.log(web3React);

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  // Auto connect the wallet is it was accepted previously
  useEffectOnce(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized && !active) {
        activate(injected);
      }
    })
  })

  const getContract = useCallback(async () => {
    const networkId = await web3.eth.net.getId();
    const networkData = (SpaceDicks.networks as Record<string, { address: string }>)[networkId];
    if (!networkData?.address) {
      return null
    }
    return new web3.eth.Contract(
      SpaceDicks.abi as AbiItem | AbiItem[],
      networkData.address
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  async function mint() {
    try {
      const contract = await getContract()
      if (!contract) {
        alert("Unable to mint, set your Metamask on the Polygon's network.")
        return
      }
      await contract.methods.claim().send({
        from: account,
        value: web3.utils.toWei('0.001', 'ether')
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      if (active) {
        const contract = await getContract()

        if (contract) {
          const zeroAddress = "0x0000000000000000000000000000000000000000"
          const filter = { from: zeroAddress, to: account }
          contract.events.Transfer({ filter })
            .on("data", (tx: any) => {
              if (tx?.type === "mined") {
                setMintedId(tx?.returnValues.tokenId)
              }
            })
            .on("error", console.log)
        }
      }
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return {
    ...web3React,
    connect,
    disconnect,
    mint,
    mintedId,
    getContract
  }
}

export default useWeb3
