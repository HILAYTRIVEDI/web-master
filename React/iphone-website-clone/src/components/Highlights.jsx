import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () =>
{
  useGSAP(() =>
  {
    gsap.to("#title", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power1.inOut"
    }),
    gsap.to('.link',{
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: "power1.inOut"
    })
  }, [])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div
        className="screen-max-width"
      >
        <div
          className="md:flex lg:flex  mb-12 w-full items-end justify-between"
        >
          <h1 id="title"
            className="section-heading"
          >
            Get The Highlights
          </h1>
          <div className="flex items-end justify-center flex-wrap gap-5">
            <p className="link">
              Watch The Film
              <img className="ml-2" src={watchImg} alt="watch-img" />
            </p>
            <p className="link">
              Watch The Event
              <img className="ml-2" src={rightImg} alt="watch-img" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights