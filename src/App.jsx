import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Equipments from './components/Equipments'
import Importance from './components/Importance'

const App = () => {
  

  
  return (
    <div className='text-center w-full min-h-screen text-gray-900 bg-white dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <Hero />
      <Equipments />
      <Importance />
      <Hero />
    </div>
  )
}

export default App