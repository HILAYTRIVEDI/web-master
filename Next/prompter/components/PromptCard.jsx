"use client"

import Image from "next/image"
import { useState } from "react"

const PromptCard = ({ data, handleTagClick, handleEditClick, handleDeleteClick }) =>
{
  const [copyPrompt, setCopyPrompt] = useState(false);
  
  const handleClick = () =>
  {
    navigator.clipboard.writeText(data.prompt)
    setCopyPrompt(true)
  }
  return (
    <div className='prompt_card'>
      <div className='flex flex-col gap-3 items-start'>
        <div className="flex justify-between w-full gap-2 items-start">
          <p className='font-bold'>{data.prompt}</p>
          <button
            type='button'
            className='btn'
            onClick={handleClick}
          >
                <Image
                  src={copyPrompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
                  alt="Copy"
                  width={20}
                  height={20}
                  className='object-contain'
                />
          </button>
        </div>
        <button
          type='button'
          className='outline_btn'
          onClick={() => handleTagClick(data.tag)}
        >
          {data.tag}
        </button>
      </div>
    </div>
  )
}

export default PromptCard