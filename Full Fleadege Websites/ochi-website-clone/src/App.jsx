import React from 'react'
import { NavBar , LandingPage, Marquee } from './components'

const App = () => {
  return (
    <main className='w-full h-screen bg-zinc-900 text-white'>
        <NavBar />
        <LandingPage />
        <Marquee />
    </main>
  )
}

export default App