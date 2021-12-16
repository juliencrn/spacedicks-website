import { FC } from 'react'
import cn from 'classnames'

import NavigationBar from './NavigationBar'
import { secondaryTitle } from '../Titles'

const Layout: FC =({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden sm:text-lg">
      <NavigationBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

function Footer() {
  return (
    <footer className="my-16 md:my-24">
      <p className={cn(secondaryTitle, "text-center")}>
        Let your quirkiness shine
      </p>
    </footer>
  )
}