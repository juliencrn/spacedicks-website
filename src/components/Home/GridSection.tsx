import Image from 'next/image'
import cn from "classnames"

interface PropTypes {
  images: string[]
  disableMarginTop?: boolean
  disableMarginBottom?: boolean
}

const GridSection = ({ disableMarginTop, disableMarginBottom, images }: PropTypes) => {
  let margin = "my-16 sm:my-24 md:my-36"
  if (disableMarginTop) {
    margin = "mb-16 sm:mb-24 md:mb-36"
  }
  if (disableMarginBottom) {
    margin = "mt-16 sm:mt-24 md:mt-36"
  }
  if (disableMarginBottom && disableMarginTop) {
    margin = "my-0"
  }
  return (
    <section className={cn("flex flex-wrap", margin)}>
      {images.map(url => (
        <div key={url} style={{ width: `calc(100%/12)` }} className='relative'>
          <div className='square'>
            <Image src={url} alt={"Random SpaceDicks"} layout="fill" />
          </div>
        </div>
      ))}
    </section>
  )
}

export default GridSection