"use client"

import Feed from "@components/Feed"
import { createContext } from "react"
import { useSession } from 'next-auth/react'

const isUserLoggedIn = createContext(false)

const Home = () => {

  const { data:session } = useSession()

  // Check if the session is not expired
  if(session?.expires){
    isUserLoggedIn.current = false
  }

  return (
   <>
    {
      isUserLoggedIn ? (
          <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
              Discover and Share
              <br />
              <span className="orange_gradient text-center">
                AI powered prompts
              </span>
            </h1>
            <p className="desc text-center">
              Get started with our AI-powered prompts
              to help you discover and share your ideas.
            </p>
            {/* Feed Component */}
            <Feed />
          </section>
      ): <h1>Loading...</h1>
    }
   </>
  )
}

export default Home