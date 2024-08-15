import ButtonGradient from './assets/svg/ButtonGradient'
import { Button, Header } from './components'

const App = () => {
  return (
    <main className='w-full h-full'>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
           <Header />
      </div>
      <ButtonGradient />
    </main>
  )
}

export default App