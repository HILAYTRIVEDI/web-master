import React from 'react'
import { NavBar , LandingPage, Marquee, PlayGround, Featured } from './components'

const App = () => {
  return (
    <main className='w-full h-screen bg-zinc-900 text-white'>
        <NavBar />
        <LandingPage />
        <Marquee />
        <PlayGround />
        <Featured />
    </main>
  )
}

export default App