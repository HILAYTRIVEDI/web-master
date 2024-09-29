"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const NavBar = () => {

  const isUserLoggedIn = true

  const [ providers, setProviders ] = useState(null)
  const [ togglDropdown, setTogglDropdown ] = useState(false)

  useEffect(() => {
    const setResponse = async () => {
      const response = await getProviders()
      setProviders(response)
    }

    setResponse ()
  },[])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image
                src="/assets/images/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className='object-contain'
            />
            <p className='logo_text'>Prompter</p>
        </Link>
        {/* Desktop Navbar */}
        <div className='sm:flex hidden'>
            {
              isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt" className='black_btn'>
                      Create Prompt
                    </Link>
                    <button type='button' className='outline_btn' onClick={() => signOut()}>
                      Sign Out
                    </button>
                    <Link href={'/profile'}>
                      <Image
                        src="/assets/images/logo.svg"
                        alt="Profile"
                        width={37}
                        height={37}
                        className='rounded-full object-contain'
                      />
                    </Link>
                </div>
              ) : (
                <>
                  {
                    providers && 
                    object.values(providers).map((provider, index) => (
                      <button
                        key={index}
                        type='button'
                        className='black_btn'
                        onClick={() => signIn(provider.id)}
                      >
                        Sign In
                      </button>
                    ))
                  }
                </>
              )
            }
        </div>
        <div className='sm:hidden flex relative'>
            {
                isUserLoggedIn ? (
                  <div className='flex'>
                    <Image
                      src="/assets/images/logo.svg"
                      alt="Profile"
                      width={37}
                      height={37}
                      className='rounded-full object-contain'
                      onClick={() => setTogglDropdown(
                        prev => !prev
                      )}
                    />
                    {
                      togglDropdown && (
                        <div className='dropdown'>
                          <Link 
                            href={'/profile'} 
                            className='dropdown_link'
                            onClick={() => setTogglDropdown(false)}
                          >
                            My Profile
                          </Link>
                          <Link
                            href={'/create-prompt'}
                            className='dropdown_link'
                            onClick={() => setTogglDropdown(false)}
                          >
                            Create Prompt
                          </Link>
                          <button type='button'
                            onClick={() => {
                              setTogglDropdown(false);
                              signOut()
                            }}
                            className='mt-5 w-full black_btn'
                          >
                            Sign Out
                          </button>
                        </div>
                      )
                    }
                  </div>
                ) : (
                  <>
                    {
                      providers &&
                      object.values(providers).map((provider, index) => (
                        <button
                          key={index}
                          type='button'
                          className='black_btn'
                          onClick={() => signIn(provider.id)}
                        >
                          Sign In
                        </button>
                      ))
                    }
                  </>
                )
            }
        </div>
    </nav>
  )
}

export default NavBar