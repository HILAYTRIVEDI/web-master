import React from 'react'
import { Navbar, Hero, Highlights, Model } from './components'

const App = () =>
{
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default App