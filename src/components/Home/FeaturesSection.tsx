import cn from 'classnames'

import { githubUrl } from "../../config"
import { CodeIcon, CollectionIcon, GlobeIcon, SettingIcon, StarIcon } from "../Icons"
import { sectionSubtitle } from '../Titles'

export const features = [
  {
    title: "Full on-chain metadata",
    text: <p>Avoid power cheating, your can verify dicks attributes by yourself.</p>,
    icon: CollectionIcon
  },
  {
    title: "Decentralized storage",
    text: <p>Images are stored on IPFS to be immutable, immortal, unstoppable.</p>,
    icon: GlobeIcon
  },
  {
    title: "Rarity algorithm",
    text: <p>Each dick is unique and each attribute has a rarity level.</p>,
    icon: SettingIcon
  },
  {
    title: "Vectorized images",
    text: <p>Ensure high quality in all sizes using SVG format.</p>,
    icon: StarIcon
  },
  {
    title: "Open-source",
    text: <p>Each piece of code of this project can be found on <a href={githubUrl} target="_blank" rel="noreferrer">Github</a>.</p>,
    icon: CodeIcon
  }
]

const FeaturesSection = () => {
  return (
    <section className="max-w-2xl mx-auto my-10 sm:my-20 md:my-24 px-6">
      <ul>
        {features.map(feature => (
          <li key={feature.title} className="mb-6 flex">
            <div className="bg-gray-800 h-10 w-10 rounded-lg flex justify-center items-center">
              {feature.icon()}
            </div>
            <div className="flex-1 flex flex-col align-middle justify-start ml-6">
              <h3 className={cn(sectionSubtitle, "mb-1")}>
                {feature.title}
              </h3>
              <div>{feature.text}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FeaturesSection