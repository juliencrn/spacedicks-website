import Image from 'next/image'
import { useState } from 'react'
import cn from 'classnames'

import gif from "../../../dicks.gif"
import { isDev, openSeaCollectionUrl, openSeaTokenBaseUrl } from '../../config'
import useWeb3 from '../../hooks/useWeb3'
import Button from "../Button"
import { mainTitle } from '../Titles'

interface PropTypes {
    title: string
    description: string
}

function HomeHero({ title, description}: PropTypes) {
  const { active, connect, mint } = useWeb3()
  const [mintedId, setMintedId] = useState<undefined | number>(undefined)

  const handleMint = async () => {
    try {
      const newTokenId = await mint()
      if (newTokenId) {
        setMintedId(newTokenId)
      } else {
        setMintedId(undefined)
      }
    } catch (error) {
      console.log(error);
      setMintedId(undefined)
    }
  }

  return (
    <header className="lg:min-h-screen lg:-mt-20 px-6 max-w-6xl mx-auto flex">
      <div className="w-full m-auto lg:flex">
        <div className="w-100 lg:w-1/2 flex py-6">
          <div style={{ aspectRatio: "1/1", maxWidth: 540 }} className={`${isDev ? "opacity-5" : ""} relative w-full rounded-2xl overflow-hidden`}>
            <Image priority src={gif} alt={"SpaceDicks"} layout="fill" />
          </div>
        </div>
        <div className="w-100 lg:w-1/2 lg:ml-6 mb-6 flex flex-col justify-center">
          <h1 className={cn(mainTitle, "mt-10 lg:mt-0 mb-6 sm:mb-10")}>
            {title}
          </h1>
          <p className="text-lg sm:text-2xl sm:leading-10 font-medium mb-6">
            {description}
          </p>

          <div className="flex flex-wrap">
            {active 
              ? <Button variant="primary" onClick={handleMint}>Mint your NFT</Button>
              : <Button variant="primary" onClick={connect}>Connect wallet</Button>
            }
            
            <a href={openSeaCollectionUrl} target="_blank" className="sm:ml-6 mt-6 sm:my-auto font-mono" rel="noreferrer">
              See on OpenSea
            </a>
          </div>
          <MinedSuccessMessage tokenId={mintedId ? mintedId.toString() : undefined} />
        </div>
      </div>
    </header>
  )
}

export default HomeHero

function MinedSuccessMessage({ tokenId }: { tokenId?: string }) {
  if (!tokenId) {
    return null
  }
  const fancyId = "#00000".slice(0, 6 - tokenId.length) + tokenId
  return (
    <span className="my-4">
      SpaceDicks token
      <a href={openSeaTokenBaseUrl + tokenId} target="_blank" rel="noreferrer">
        {' '}
        {fancyId}
        {' '}
      </a>
      mined! 🎉
    </span>
  )
}