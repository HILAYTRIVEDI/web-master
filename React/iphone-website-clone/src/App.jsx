import React from 'react'
import { Navbar, Hero, Highlights, Model, Features, HowItWorks } from './components'

import * as Sentry from "@sentry/react";

const App = () =>
{
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default Sentry.withProfiler(App);