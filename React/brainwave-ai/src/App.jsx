import ButtonGradient from './assets/svg/ButtonGradient'
import { Button } from './components'

const App = () => {
  return (
    <main className='w-full h-full'>
      <h1>Brainwave AI</h1>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
          <Button className="mt-10" href="#login">
            Something
          </Button>
      </div>
      <ButtonGradient />
    </main>
  )
}

export default App