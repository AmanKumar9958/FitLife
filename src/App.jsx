import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Equipments from './components/Equipments'
import Importance from './components/Importance'
import Yoga from './components/Yoga'
import Testimonial from './components/Testimonial'
import Discount from './components/Discount'
import Footer from './components/Footer'

const App = () => {
  

  
  return (
    <div className='text-center w-full min-h-screen text-gray-900 bg-white dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <Hero />
      <Equipments />
      <Importance />
      {/* Cards */}
      <Yoga />
      <Testimonial />
      <Discount />
      <Footer />
    </div>
  )
}

export default App