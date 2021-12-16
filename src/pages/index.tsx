import type { NextPage } from 'next'
import { AppContext } from 'next/app'

import { getRandomImages } from '../api/getRandomImages'
import FeaturesSection from '../components/Home/FeaturesSection'
import HomeHero from '../components/Home/HomeHero'
import GridSection from '../components/Home/GridSection'
import TextSection from '../components/Home/TextSection'
import { contractAddress, description, githubUrl, openSeaCollectionUrl, polygonScanUrl, title, twitterUrl } from '../config'
import LastMintedSection from '../components/Home/LastMintedSection'

const Home: NextPage<{ images: string[][] }> = ({ images }) => {
  return (
    <>
      <HomeHero title={title} description={description} />
      
      <section className="max-w-5xl mx-auto my-10 sm:my-20 md:mb-24 lg:mt-0 px-6">
        <p className="text-lg sm:text-2xl sm:leading-10 font-extrabold tracking-tight mb-6 text-center text-gray-50">
          {`The world of art, the crypto world, a beer with friends, a misunderstanding, 
          phallocracy, feminism, geeks and rainbows, you can buy a banana taped to a wall or a DICK, 
          because, why not? "life is a conundrum of esoterica"`}
        </p>
      </section>

      <GridSection images={images[0]} />

      <FeaturesSection />
      
      <GridSection images={images[1]} />
      
      <TextSection title="what is SpaceDicks?">
        <p>
          The SpaceDicks are a collection of 10,000 uniquely generated dicks as high quality SVG images. 
          No two are exactly alike, and each one of them can be officially owned by a single person on the Polygon blockchain.
          Until all are mined, everyone can mint its own and feel the thrill.
        </p>
      </TextSection> 

      <TextSection title="why? / Story / Spirit">
        <p>Love art, love crypto-world, love tech, love fun. You can mixt some hobbies.</p>
        <p>Be unique and be part of a different communities, which of Doomer, Wokist, geek, unicorn, witch, space adventurer.</p>
      </TextSection>

      <LastMintedSection />

      <TextSection title="how can I mint my SpaceDicks?">
        <ol className="list-decimal pl-6">
          <li>
            Download and install the <a href="https://metamask.io/" target="_blank" rel="noreferrer">MetaMask</a> wallet, a Chrome/Firefox browser extension.
            <br />
            This will allow websites (that you authorize) access to your crypto account.
          </li>
          <li>Then, refresh the page and click on the &quot;connect&quot; button</li>
          <li>
            Once logged in, you can mint your own SpaceDicks token and enter the blockchain for life! 
            The 1000 first will be given for free then it will cost you 0.01 ether and some network fee.
          </li>
          <li>Finally, you can see your DICK in your wallet or in the <a href={openSeaCollectionUrl} target="_blank" rel="noreferrer">OpenSea</a> NFT marketplace.</li>
        </ol>
      </TextSection>

      <TextSection title="how I can buy/sell SpaceDicks?">
        <p>
          Like every ERC-721 tokens, you can exchange them on the secondary market using the <a href={openSeaCollectionUrl} target="_blank" rel="noreferrer">OpenSea</a> marketplace.
          There you can sell it for a fixed price or even at auction.
          {/* If you are connected to this website and if you have a DICK, you can find it by clicking on the My Dicks top menu link. */}
        </p>
      </TextSection>

      <TextSection title="how can I see my SpaceDicks in my wallet?">
        <p>
          To see your DICKs in the <a href="https://metamask.io/" target="_blank" rel="noreferrer">MetaMask</a> wallet, you need to import the token support first.
        </p>
        <ol className="list-decimal pl-6">
          <li>Open MetaMask and go to the Polygon&apos;s network (the dropdown menu on top).</li>
          <li>{'Click on the "Assets" tab, scroll down and click on "Import tokens".'}</li>
          <li>
            Fill the form: 
            <ul className="pl-6 list-disc">
              <li>Contract address: <code className="break-words font-mono">{contractAddress}</code></li>
              <li>Symbol: <code className="font-mono">DICK</code></li>
              <li>Decimal: <code className="font-mono">0</code></li>
            </ul>
          </li>
        </ol>
      </TextSection>

      <TextSection title="more?">
        <ol className="pl-6 list-disc">
          <li>Explore the code on <a href={githubUrl} target="_blank" rel="noreferrer">Github</a>.</li>
          <li>Trade it on <a href={openSeaCollectionUrl} target="_blank" rel="noreferrer">Opensea</a>.</li>
          <li>Follow us on <a href={twitterUrl} target="_blank" rel="noreferrer">Twitter</a>.</li>
          <li>Inspect on <a href={polygonScanUrl} target="_blank" rel="noreferrer">Polygon Scan</a>.</li>
        </ol>
      </TextSection>

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
