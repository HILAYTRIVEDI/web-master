"use client"

import { useState, useEffect, use } from 'react'
import PromptCardList from './PromptCardList'

const Feed = () =>
{

  const [ searchText, setSearchText ] = useState('')
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()

      setPosts(data)
    }

    fetchPosts()
  }, [])  

  const handleSearchChange = (e) =>{
    e.preventDefault();
    setSearchText(e.target.value)
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for prompts...'
          value={searchText}
          onChange={handleSearchChange}
          className='search_input peer'
          required
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed