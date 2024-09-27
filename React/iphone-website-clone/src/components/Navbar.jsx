import {appleImg, bagImg, searchImg} from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex items-center w-full screen-max-width justify-between'>
            {/* Logo */}
            <img 
                src={appleImg} 
                alt="apple logo"
                width={14}
                height={18}
            />
            {/* Nav Lists */}
            <div className='flex flex-1 max-sm:hidden items-center justify-center'>
                  {navLists.map((nav)=>(
                    <div 
                        className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' 
                        key={nav}>
                        {nav}
                    </div>
                ))}
            </div>
            {/* Search and Bag */}
            <div className='flex items-center justify-center gap-7'>
                <img src={searchImg} alt="search icon" width={18} height={18}/>
                <img src={bagImg} alt="bag icon" width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar