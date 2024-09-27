import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo,smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'

const Hero = () =>
{
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo)
  
  const handleVideoSrcSet = () =>
  {
    setVideoSrc(window.innerWidth > 768 ? heroVideo : smallHeroVideo)
  }

  useEffect(() =>
  {
    window.addEventListener('resize', handleVideoSrcSet)
    return () => window.removeEventListener('resize', handleVideoSrcSet)
  }, [])

  useGSAP(() =>
  {
    gsap.to('#hero', {
      duration: 1,
      delay:1.5,
      opacity: 1,
      ease: 'power1.inOut'
    }),
    gsap.to('#cta', {
      duration: 1,
      delay:2,
      opacity: 1,
      translateY: -50,
      ease: 'power1.inOut'
    })
  }, [])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex flex-col items-center justify-center'>
        <p id="hero" className='hero-title'>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video 
            className='pointer-events-none' autoPlay muted playsInline={true}>
            <source 
              src={videoSrc}
              type='video/mp4'
            />
          </video>
        </div>
      </div>
      <div id="cta"  className="flex flex-col items-center opacity-0 translate-y-20">
        <a className='btn' href="#highlights">
          Buy
        </a>
        <p className='font-normal text-xl'>
          From $199/month or $999 
        </p>
      </div>
    </section>
  )
}

export default Hero