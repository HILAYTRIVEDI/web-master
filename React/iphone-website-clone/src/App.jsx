import React from 'react'
import { Navbar, Hero, Highlights, Model, Features } from './components'

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
    </main>
  )
}

export default Sentry.withProfiler(App);