import { useEffect, useState } from "react"

const PlayGround = () =>
{
    return (
        <section className='relative w-full h-screen bg-white text-zinc-900 bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] bg-cover bg-center'>
            <div className="absolute w-1/2 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="eyes flex items-center justify-center gap-20">
                    <div className="relative eye h-56 w-56 bg-white rounded-full">
                        <div className='bg-zinc-900 rounded-full w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
                            <div className='bg-white rounded-full w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                            </div>
                        </div>
                    </div>
                    <div className="relative eye h-56 w-56 bg-white rounded-full">
                        <div className='bg-zinc-900 rounded-full w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='bg-white rounded-full w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlayGround