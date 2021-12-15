import type { NextPage } from 'next'
import { AppContext } from 'next/app'

import { getRandomImages } from '../api/getRandomImages'
import FeaturesSection from '../components/Home/FeaturesSection'
import HomeHero from '../components/Home/HomeHero'
import GridSection from '../components/Home/GridSection'
import TextSection from '../components/TextSection'
import { contractAddress, description, githubUrl, openSeaCollectionUrl, polygonScanUrl, title, twitterUrl } from '../config'
import LastMintedSection from '../components/Home/LastMintedSection'

const Home: NextPage<{ images: string[][] }> = ({ images }) => {
  return (
    <>
      <HomeHero title={title} description={description} />
      
      <section className="max-w-5xl mx-auto mb-10 sm:mb-20 md:mb-24 px-6">
        <p className="text-lg sm:text-2xl sm:leading-10 font-extrabold tracking-tight mb-6 text-center text-gray-50">
          {'The world of art, the crypto world, a beer with friends, a misunderstanding, patriarchy, feminism, geeks and rainbows, you can buy a banana taped to a wall or a cock, because, why not? "The world is just a big esoteric imbroglio."'}
        </p>
      </section>

      <GridSection images={images[0]} />

      <FeaturesSection />
      
      <GridSection images={images[1]} />
      
      <TextSection 
        title="what is SpaceDicks?" 
        text={(
          <p>
            The SpaceDicks are a collection of 10,000 uniquely generated dicks as high quality SVG images. 
            No two are exactly alike, and each one of them can be officially owned by a single person on the Polygon blockchain.
            Until all are mined, everyone can mint its one.
          </p>
        )}
      />

      <TextSection title="why? / Story / Spirit" text={(
        <>
          <p>Love art, love crypto-world, love tech, love fun. You can mixt some hobbies.</p>
          <p>Be unique and be part of a different communities, which of Doomer, Wokist, geek, unicorn, witch, space adventurer.</p>
        </>
      )}/>

      <LastMintedSection />

      <TextSection title="how can I mint my SpaceDicks?" text={(
        <ol className="list-decimal leading-8 pl-6">
          <li>
            Download and install the <a href="https://metamask.io/" target="_blank" rel="noreferrer">MetaMask</a> wallet, a Chrome/Firefox browser extension.
            <br />
            This will allow websites (that you authorize) access to your crypto account.
          </li>
          <li>If you made a new account, you have to buy some Ether.</li>
          <li>{'Once you have the plugin installed, this website will recognize it and you can connect by clicking on the button "Connect"'}</li>
          <li>Once you are connected, you can mint your own SpaceDicks token! 🎉 <br />It will cost you 0.01 ether more some network fee.</li>
          <li>Finally, you can see your DICK in your wallet or in the <a href={openSeaCollectionUrl} target="_blank" rel="noreferrer">OpenSea</a> NFT marketplace.</li>
        </ol>
      )} />

      <TextSection title="how I can buy/sell SpaceDicks?" text={(
        <p>
          Like every ERC-721 tokens, you can exchange them on the secondary market using the <a href={openSeaCollectionUrl} target="_blank" rel="noreferrer">OpenSea</a> marketplace.
          If you are connected to this website and if you have a DICK, you can find it by clicking on the My Dicks top menu link.
        </p>
      )} />

      <TextSection title="where are stored SpaceDicks? How it works?" text={(
        <>
          <p>
            When a new SpaceDicks token is minted, its unique traits are generated randomly and saved on the blockchain by the smart-contract.
            At the end of this on-chain process, an URL is generated.
          </p>
          <p>
            Every applications that want to show the DICK image (like NFT Marketplaces, wallets) will call this URL.
            At the first call, the SVG image is created following the traits given by the on-chain metadata, and uploaded on a decentralized peer-to-peer network, the Inter-Planetary File System (IPFS). 
            This way, the DICK metadata and image are both frozen forever on decentralized networks.
          </p>
        </>
      )} />

      <TextSection title="How can I see my SpaceDicks in my wallet?" text={(
        <>
          <p>
            To see your DICKS in the <a href="https://metamask.io/" target="_blank" rel="noreferrer">MetaMask</a> wallet, you have to import the token support once.
          </p>
          <ol className="list-decimal leading-8 pl-6">
            <li>
              Open MetaMask and the Polygon network (the dropdown menu at the top).
            </li>
            <li>{'Click on the "Assets" tab, scroll down and click on "Import tokens"'}</li>
            <li className='break-words'>
              Fill the form: 
              <br />
              - Token Contract Address: {contractAddress}
              <br />
              - Token Symbol: DICK
              <br />
              - Token Decimal: 0
            </li>
          </ol>
        </>
      )} />

      <TextSection title="more?" text={(
        <ol className="pl-6 leading-8 list-disc">
          <li>Read the code on <a href={githubUrl} target="_blank" rel="noreferrer">Github</a>.</li>
          <li>Trade it on Opensea <a href={openSeaCollectionUrl} target="_blank" rel="noreferrer">Opensea</a>.</li>
          <li>Follow us on <a href={twitterUrl} target="_blank" rel="noreferrer">Twitter</a>.</li>
          <li>Inspect on <a href={polygonScanUrl} target="_blank" rel="noreferrer">Polygon Scan</a>.</li>
        </ol>
      )} />

      <GridSection disableMarginBottom images={images[2]} />
    </>
  )
}

export default Home

// Fetch images for API only on build
// will be passed to the page component as props
export async function getStaticProps(context: AppContext) {
  const line = 12 // one line is 12 columns
  const section = 3 * line // one section is 3 lines
  const randomImages = getRandomImages(3 * section)
  return {
    props: {
      images: [
        randomImages.slice(0, section),
        randomImages.slice(section, 2 * section),
        randomImages.slice(2 * section, 3 * section),
      ],
    }, 
  }
}
