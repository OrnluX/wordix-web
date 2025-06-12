import Header from './Header'
import Footer from './Footer'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="py-6 min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow px-4 py-6 sm:py-10 flex flex-col items-center text-center space-y-6 text-purple-200">
        {children}
      </main>
      <Footer />
    </div>
  )
}
