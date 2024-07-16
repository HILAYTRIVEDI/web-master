import React from 'react'
import {cards} from '../utils/cards'

const Featured = () => {
  return (
    <section className='w-full min-h-screen bg-zinc-900 text-white pt-14 pb-32 lg:pt-90 lg:pb-150 '>
          <div className="heading px-20 text-8xl font-[NeueMontreal] font-light pb-8 border-b-2 border-zinc-800">
              Featured Projects
          </div>
          <div className="cards w-full grid grid-col-1  md:grid-cols-2 px-20 py-24 gap-10">
            {cards.map((card, index) => (
                <div key={index} className="card mb-8 rounded-xl overflow-hidden">
                    <div className="card-title flex items-center gap-2 mb-3">
                        <span className='block h-3 w-3 rounded-full bg-white'></span>
                        <h2 className="font-[NeueMontreal] text-xl">{card.title}</h2>
                    </div>
                    <div className="card-image">
                        <img src={card.image_url} alt={card.image_alt} className='w-full h-full object-cover'/>
                    </div>
                    <div className="card-tags flex flex-wrap lg:flex-nowrap gap-4 mt-5 items-center">
                        {card.tags.map((tag, index) => (
                            <span key={index} className="tag block py-2 px-4 border-white border rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
          </div>
    </section>
  )
}

export default Featured