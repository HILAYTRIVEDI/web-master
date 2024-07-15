import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () =>
{
    return (
        <section className='w-full bg-white text-zinc-900 rounded-3xl'>
            <div className="text flex overflow-hidden">
               {
                    Array(3).fill(0).map((_, i) =>
                    {
                        return (
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: '-100%' }}
                                transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
                                className='text-center text-[500px] font-[FoundersGrotesk] font-semibold text-zinc-900 mb-10 flex-shrink-0 leading-none uppercase' key={i}>
                                <span className='text-zinc-900'> We Are Ochi</span>
                            </motion.div>
                        )
                    })
                }
                    
            </div>
        </section>
    )
}

export default Marquee