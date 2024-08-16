import ButtonGradient from '../public/assets/svg/ButtonGradient'
import { Button, Header, Hero, Section } from './components'

const App = () => {
  return (
    <main className='w-full h-full'>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
           <Header />
           <Hero />
      </div>
      <ButtonGradient />
    </main>
  )
}

export default App