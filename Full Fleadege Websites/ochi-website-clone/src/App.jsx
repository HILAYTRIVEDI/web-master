import React from 'react'
import { NavBar , LandingPage, Marquee, PlayGround } from './components'

const App = () => {
  return (
    <main className='w-full h-screen bg-zinc-900 text-white'>
        <NavBar />
        <LandingPage />
        <Marquee />
        <PlayGround />
    </main>
  )
}

export default App