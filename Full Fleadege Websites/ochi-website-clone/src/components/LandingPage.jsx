import React from 'react'

const LandingPage = () =>
{
    return (
        <section className='w-full h-screen bg-zinc-900 '>
            <div className="textstructure  mt-16 px-20">
                <div className="masker font-[FoundersGrotesk] text-white leading-none tracking-tighter font-semibold">
                    <h1 className="uppercase text-9xl font-bold flex flex-col">
                        We Create
                        <span className="flex items-center overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="Ochi Image" className='flex w-40 h-30 object-cover mr-4 rounded' />
                            Eye Opening
                        </span>
                        <span className='block'>
                            Presentations
                        </span>
                    </h1>
                </div>
            </div>
            <div className='border-t-[1px] w-full mt-32 border-zinc-700'>
                <div className=' pt-10 px-20 flex justify-between items-center'>
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                        <p key={index} className="text-md font-semibold text-white cursor-pointer">
                            {item}
                        </p>
                    ))}
                <div className='start'>
                    <div className='px-4 py-2 border-[1px] border-white rounded-full hover:bg-white hover:text-zinc-900 cursor-pointer transition-all ease-in-out duration-300'>
                        Start a Project
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage