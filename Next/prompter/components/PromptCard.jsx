"use client"

import Image from "next/image"
import { useState } from "react"

const PromptCard = ({ data, handleTagClick }) =>
{
  const [ copyPrompt, setCopyPrompt ] = useState(false);
  const handleClick = () =>
  {
    navigator.clipboard.writeText(data.prompt)
    setCopyPrompt(true)
  }
  return (
    <div className='flex gap-3 p-5 border border-gray-300 rounded-lg'>
      <div className='flex flex-col gap-3 items-center'>
        <p className='font-bold'>{data.prompt}</p>
        <button
          type='button'
          className='outline_btn'
          onClick={() => handleTagClick(data.tag)}
        >
          {data.tag}
        </button>
        <button
          type='button'
          className='btn'
          onClick={handleClick}
        >
          {
            copyPrompt ? (
              <p className="text-center text-xs">Copied!</p>
            ) : (
              <Image
                src="/assets/icons/copy.svg"
                alt="Copy"
                width={20}
                height={20}
                className='object-contain'
              />
            )
          }
        </button>
      </div>
    </div>
  )
}

export default PromptCard