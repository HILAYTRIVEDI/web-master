"use client"

import Feed from "@components/Feed"
import { useSession } from 'next-auth/react'

const Home = () =>
{
  const { data: session } = useSession()

  return (
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
  )
}

export default Home