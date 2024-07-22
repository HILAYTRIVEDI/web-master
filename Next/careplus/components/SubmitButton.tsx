import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

interface ButtonProps {
  isLoading?: boolean
  className?: string
  children?: React.ReactNode
}

const SubmitButton = ({ isLoading, className, children } : ButtonProps ) => {
  return (
    <Button
      type="submit"
      className={`w-full bg-green-500 hover:bg-dark-500 text-white ${className}`}
    >
        {
            isLoading ? <div className="animate-spin flex items-center gap4">
                <Image
                    src="/assets/icons/loader.svg"
                    alt="loader"
                    width={24}
                    height={24}
                    className='animate-spin'
                />
                Loading ...
            </div> : children
        }
    </Button>
  )
}

export default SubmitButton