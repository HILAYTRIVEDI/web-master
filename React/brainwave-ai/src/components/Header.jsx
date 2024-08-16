import { brainwave } from '../../public/assets'
import { navigation } from '../constants'
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import Button from './Button';
import MenuSvg from '../../public/assets/svg/MenuSvg';
import { HambugerMenu } from './design/Header';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = () =>
{
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation)

        if (openNavigation) {
            disablePageScroll();
        } else {
            enablePageScroll();
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        
        if(!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    }

    const pathname = useLocation();
    return (
        <header className={`
            w-full fixed top-0 left-0 z-50 bg-n-8/90  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm
            ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}
        `}>
            <div className='flex items-center justify-between px-5 lg:px-[7.5rem] xl:px-10 max-lg:py-4'>
                <a className='block w-[12rem] xl:mr-8' href='#hero'>
                    <img
                        src={brainwave}
                        alt='BrainWave Logo'
                        width={190}
                        height={40}
                    />
                </a>
                <nav className={`
                        fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent
                        ${openNavigation ? 'flex' : 'hidden'}
                    `}>
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {
                            navigation.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    onClick={handleClick}
                                    className={
                                        `
                                            block relative font-code text-3xl uppercase text-n-1 transition-colors hover:text-color-1
                                            ${item.onlyMobile ? 'lg:hidden' : ''}
                                            p-6 md:py-8 lg:-mr-0.35 lg:text-xs lg:font-semibold
                                            ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
                                            lg:leading-5 lg:hove-n-1 xl:px-12
                                        `
                                    }
                                >
                                    {item.title}
                                </a>
                            ))
                        }
                        </div>
                    <HambugerMenu/>
                </nav>
                <a
                    href="#signup"
                    className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
                >
                    New Account
                </a>
                <Button
                    className={`hidden lg:flex`}
                    href="#login"
                >
                    Sign In
                </Button>
                <Button
                    className={`
                        ml-auto lg:hidden
                    `}
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation}/>
                </Button>
            </div>
        </header>
    )
}

export default Header