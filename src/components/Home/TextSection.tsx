import cn from 'classnames'
import { FC } from 'react'

import { sectionTitle } from "../Titles"

interface PropTypes {
  title: string
}

const TextSection: FC<PropTypes> = ({ title, children }) => {
  return (
    <section className="max-w-4xl mx-auto my-8 sm:my-12 md:my-16 px-6">
      <h2 className={cn(sectionTitle, "my-3")}>
        {title}
      </h2>
      <div>{children}</div>
    </section>
  )
}

export default TextSection