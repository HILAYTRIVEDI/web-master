import {appleImg, bagImg, searchImg} from '../utils'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img 
                src={appleImg} 
                alt="apple logo"
                width={14}
                height={18}
            />

            <div>
                {['Phones', 'MacBooks','Tablet'].map((nav)=>(
                    <div key={nav}>{nav}</div>
                ))}
            </div>
            <div>
                <img src={searchImg} alt="search icon" width={18} height={18}/>
                  <img src={bagImg} alt="bag icon" width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar