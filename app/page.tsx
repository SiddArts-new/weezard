import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import { Navbar } from './components/Navbar'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-950 px-6">
        <Navbar />
        <Hero />
      </div>
      <div className="container mx-auto px-6">
        <hr className="my-12 h-px border-0 bg-gray-200 dark:bg-gray-800" />
      </div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <Services />
      </div>
      <div className="container mx-auto px-6">
        <hr className="my-12 h-px border-0 bg-gray-200 dark:bg-gray-800" />
      </div>
      <div className="bg-white dark:bg-gray-950 px-0">
        
          <Pricing />
        
      </div>
      <div className="container mx-auto px-6">
        <hr className="my-12 h-px border-0 bg-gray-200 dark:bg-gray-800" />
      </div>
      <div className="bg-[#f7f7f7] dark:bg-gray-900 px-6">
        <CaseStudies />
      </div>
      <div className="container mx-auto px-6">
        <hr className="my-12 h-px border-0 bg-gray-200 dark:bg-gray-800" />
      </div>
      <Footer />
    </main>
  )
} 