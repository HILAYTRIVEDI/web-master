import React from 'react'
import { Navbar, Hero, Highlights, Model } from './components'

import * as Sentry from "@sentry/react";

const App = () =>
{
  return (
    <main className='bg-black'>
      return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default Sentry.withProfiler(App);