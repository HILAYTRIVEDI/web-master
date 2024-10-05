"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'

const myProfile = () =>
{
  const { data: session } = useSession()
  const router = useRouter()

  const [posts, setPosts] = useState([])

  useEffect(() =>
  {
    const fetchPosts = async () =>
    {
      const response = await fetch(`/api/users/${session?.user?.email}/posts`)
      const data = await response.json()

      setPosts(data)
    }

    if (session?.user.email) fetchPosts()
  }, [session?.user.email])

  const handleEditClick = (prompt) =>
  {
    router.push(`/update-prompt/${prompt.id}`)
  }

  const handleDeleteClick = async (prompt) =>
  {
    router.push(`/delete-prompt/${prompt.id}`)
  }

  return (
    <Profile
      name={session?.user?.name}
      image={session?.user?.image}
      desc="Welcome to your profile"
      data={posts}
      handleEditClick={handleEditClick}  // Pass as a callback
      handleDeleteClick={handleDeleteClick}  // Pass as a callback
    />
  )
}

export default myProfile
