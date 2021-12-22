import type { NextPage } from 'next'
// import { AppContext } from 'next/app'
import Image from 'next/image'
import cn from 'classnames'

import FeaturesSection from '../components/Home/FeaturesSection'
import HomeHero from '../components/Home/HomeHero'
import { Section } from '../components/Home/GridSection'
import TextSection from '../components/Home/TextSection'
import { contractAddress, description, githubUrl, openSeaCollectionUrl, polygonScanUrl, title, twitterUrl } from '../config'
import LastMintedSection from '../components/Home/LastMintedSection'
import { sectionSubtitle } from '../components/Titles'
import cover1 from '../assets/cover-3x12-1.png'
import cover2 from '../assets/cover-3x12-2.png'
import cover3 from '../assets/cover-3x12-3.png'

const Home: NextPage<{ /*images: string[][] */ }> = () => {
  return (
    <>
      <HomeHero title={title} description={description} />
      
      <section className="max-w-5xl mx-auto my-10 sm:my-20 md:mb-24 lg:mt-0 px-6">
        <p className={cn(sectionSubtitle.replace("leading-none", ""), "text-center")}>
          The world of art, the crypto world, a beer with friends, a misunderstanding, 
          phallocracy, feminism, geeks and rainbows, you can buy a banana taped to a wall or a DICK, 
          because, why not? « life is a conundrum of esoterica. »
        </p>
      </section>

      <Section>
        <div className="relative w-full" style={{ paddingBottom: `${3 / 12 * 100}%` }}>
          <Image quality={90} src={cover1.src} alt={"Dicks cover"} layout='fill' />
        </div>
      </Section> 
      
      <FeaturesSection />
      
      <Section>
        <div className="relative w-full" style={{ paddingBottom: `${3 / 12 * 100}%` }}>
          <Image quality={90} src={cover2.src} alt={"Dicks cover"} layout='fill' />
        </div>
      </Section>
      
      <TextSection title="what is SpaceDicks?">
        <p>
          The SpaceDicks are a collection of 10,000 uniquely generated dicks as high quality SVG images. 
          No two are exactly alike, and each one of them can be officially owned by a single person on the Polygon blockchain.
          Until all are mined, everyone can mint its own and feel the thrill.
        </p>
      </TextSection> 

      <TextSection title="who needs a SpaceDicks in their life?">
        <p>
          Do you like art? Does cryptomania thrill you? You wouldn&apos;t say no to making a little money? 
          You want to get in the wave? 
          SpaceDicks is for you who are doomers, nerds, wokists, unicorns, witches, geeks, space adventurers, 
          cyberpunks, cursed poets and all the weirdos of the world. Here your oddity is valued.
          Your friends and family probably think that NFTs are just digital images, that this investment has no basis. 
          But geniuses are never immediately understood. Do you believe in it? Then it has value. 
          Don&apos;t forget that « The human has always needed to confront things that are beyond him. »
        </p>
      </TextSection>

      <TextSection title="why?">
        <p>
          This underground technology is the internet of tomorrow, and maybe even, the future of art and culture. 
          Thanks to the blockchain we will reshape the economy so that it serves us, and not the other way around. 
          We&apos;re going to undo censorship, borders and discrimination, protect our privacy, 
          decentralize power and hack the world, in a fun and cool way of course, sexycool is our signature.
        </p>
      </TextSection>

      <LastMintedSection />

      <TextSection title="how can I mint my SpaceDicks?">
        <ol className="list-decimal pl-6">
          <li>
            Download and install the <a href="https://metamask.io/" target="_blank" rel="noreferrer">MetaMask</a> wallet, a Chrome/Firefox browser extension.
            <br />
            This will allow websites (that you authorize) access to your crypto account.
          </li>
          <li>Then, refresh the page and click on the « connect » button</li>
          <li>To pay the gas fees, you need have some MATIC in your wallet, you can buy it with your CB using <a href="https://www.moonpay.com/buy/matic" target="_blank" rel="noreferrer">moonpay</a>.</li>
          <li>
            Once logged in, you can mint your own SpaceDicks token and enter the blockchain for life! 
            <br />
            The 1000 first will be given for free then it will cost you 25 MATIC (≈$50) and some network fee.
          </li>
          <li>Finally, you can see your DICK in your wallet or in the <a href={openSeaCollectionUrl} target="_blank" rel="noreferrer">OpenSea</a> NFT marketplace.</li>
        </ol>
      </TextSection>

      <TextSection title="how I can buy/sell SpaceDicks?">
        <p>
          Like every ERC-721 tokens, you can exchange them on the secondary market.
          On the <a href={openSeaCollectionUrl} target="_blank" rel="noreferrer">OpenSea</a> marketplace,
          you can sell it for a fixed price or even at auction.
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

      <Section disableMarginBottom>
        <div className="relative w-full" style={{ paddingBottom: `${3 / 12 * 100}%` }}>
          <Image quality={90} src={cover3.src} alt={"Dicks cover"} layout='fill' />
        </div>
      </Section>
    </>
  )
}

export default Home

// Fetch images for API only on build
// will be passed to the page component as props
// export async function getStaticProps(context: AppContext) {
//   const line = 12 // one line is 12 columns
//   const section = 3 * line // one section is 3 lines
//   const randomImages = getRandomImages(3 * section)
//   return {
//     props: {
//       images: [
//         randomImages.slice(0, section),
//         randomImages.slice(section, 2 * section),
//         randomImages.slice(2 * section, 3 * section),
//       ],
//     }, 
//   }
// }
