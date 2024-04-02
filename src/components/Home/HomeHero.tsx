import Image from 'next/image'
import { useState } from 'react'
import cn from 'classnames'
import useSWR from 'swr'

import gif from "../../assets/dicks.gif"
import { isDev, openSeaCollectionUrl, openSeaTokenBaseUrl } from '../../config'
import useWeb3 from '../../hooks/useWeb3'
import Button from "../Button"
import { mainTitle } from '../Titles'
import { FireIcon } from '../Icons'

// const fetcher = (path: string) => fetch(API_URL + path).then(res => res.json())

interface PropTypes {
  title: string
  description: string
}

function HomeHero({ title, description }: PropTypes) {
  // const { data: supply } = useSWR<number>("/supply", fetcher)
  // const { active, connect, mint } = useWeb3()
  // const [isMinting, setIsMinting] = useState<boolean>(false)
  // const [mintedId, setMintedId] = useState<undefined | number>(undefined)

  // const handleMint = async () => {
  //   setIsMinting(true)
  //   try {
  //     const newTokenId = await mint()
  //     if (newTokenId) {
  //       setMintedId(newTokenId)
  //     } else {
  //       setMintedId(undefined)
  //     }
  //     setIsMinting(false)
  //   } catch (error) {
  //     console.log(error);
  //     setMintedId(undefined)
  //     setIsMinting(false)
  //   }
  // }

  return (
    <header className="lg:min-h-screen lg:-mt-20 px-6 max-w-6xl mx-auto flex flex-wrap">
      <div className="w-full m-auto lg:flex">
        <div className="w-100 lg:w-1/2 flex my-6">
          <div style={{ maxWidth: 540 }} className={`${isDev ? "opacity-5" : ""} relative square rounded-2xl overflow-hidden`}>
            <Image quality={90} priority src={gif} alt={"SpaceDicks"} layout="fill" />
          </div>
        </div>
        <div className="w-100 lg:w-1/2 lg:ml-6 mb-6 flex flex-col justify-center">
          <h1 className={cn(mainTitle, "mt-10 lg:mt-0 mb-6 sm:mb-10")}>
            {title}
          </h1>
          <p className="text-lg sm:text-2xl sm:leading-10 font-medium mb-6">
            {description}
          </p>

          {/* {supply && supply < 1100 && (
            <div className='flex my-3 text-gray-50'>
              <h6 className="my-auto mr-1 text-sm font-medium">
                <code className='font-mono'>{1100 - supply}</code> free DICKs left on pre-sale
              </h6>
              <FireIcon />
            </div>
          )} */}

          <div className="flex flex-wrap">
            {/* {active 
              // case: logged in
              ? (isMinting 
                ? (
                  <Button variant="primary" disabled>
                    DICK is growing...
                  </Button>
                ) : (supply && supply >= 10_000 
                  ? (
                    <Button variant="primary" disabled>
                      SOLD OUT
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={handleMint}>
                      Mint your NFT
                    </Button>
                  )
                ))
              // case: logged out
              : <Button variant="primary" onClick={connect}>Mint your NFT</Button>
            } */}

            <Button variant="primary" disabled>
              SALE CLOSED
            </Button>

            <a href={openSeaCollectionUrl} target="_blank" className="sm:ml-6 mt-6 sm:my-auto font-mono" rel="noreferrer">
              See on OpenSea
            </a>
          </div>
          {/* <MinedSuccessMessage tokenId={mintedId ? mintedId.toString() : undefined} /> */}
        </div>
      </div>
    </header>
  )
}

export default HomeHero

// function MinedSuccessMessage({ tokenId }: { tokenId?: string }) {
//   if (!tokenId) {
//     return null
//   }
//   const fancyId = "#00000".slice(0, 6 - tokenId.length) + tokenId
//   return (
//     <span className="my-4">
//       SpaceDicks token
//       <a href={openSeaTokenBaseUrl + tokenId} target="_blank" rel="noreferrer">
//         {' '}
//         {fancyId}
//         {' '}
//       </a>
//       mined! 🎉
//     </span>
//   )
// }