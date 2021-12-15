import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { useCallback } from "react"
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
  const { active, account, library: web3, activate, deactivate } = web3React

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

  async function mint(): Promise<number | null> {
    try {
      const contract = await getContract()
      if (!contract) {
        alert("Unable to mint, set your Metamask on the Polygon's network.")
        return null
      }
      const tx = await contract.methods.claim().send({
        from: account,
        value: web3.utils.toWei('0.001', 'ether')
      })

      return Number(tx?.events?.Transfer?.returnValues?.tokenId) || null
    } catch (error) {
      console.log(error)
      return null
    }
  }

  return {
    ...web3React,
    connect,
    disconnect,
    mint,
    getContract
  }
}

export default useWeb3
