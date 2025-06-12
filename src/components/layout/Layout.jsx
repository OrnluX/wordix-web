import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
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
