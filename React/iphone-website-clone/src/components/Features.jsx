import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "../utils/animations"
import { explore1Img, explore2Img, exploreVideo } from "../utils"
import { useRef } from "react"
import gsap  from "gsap"

const Features = () =>
{
    const videoRef = useRef();
    useGSAP(() =>
    {
        animateWithGsap('#features_title', {
            y: 0,
            opacity: 1
        }),
        animateWithGsap('.g_grow', {
            scale:1,
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
        },
        {
            scrub:5.5
        },
        gsap.to('#exploreVideo',{
            scrollTrigger:{
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
                onComplete: () => {
                    videoRef.current.play();
                }
            }
        })
    )
    },[])

    return (
        <section className='h-full common-paddingbg-zinc overflow-hidden '>
            <div className='screen-max-width'>
                <div className='mb-12 w-full'>
                    <h1 id="features_title" className='section-heading'>
                        Explore the Full Story
                    </h1>
                </div>
                <div className="flex flex-col jusry-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 px-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">
                            Iphone
                        </h2>
                        <h2 id="forged_text" className="text-5xl lg:text-7xl font-semibold">
                            Forged In Titanium
                        </h2>
                    </div>
                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative h-50 w-full flex items-center">
                            <video playsInline id="exploreVideo" className="w-full h-full " preload="none" muted autoPlay ref={videoRef}>
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container">
                                <div className="overflow-hidden flex-1 h-[50vh] lg:flex lg:flex-row">
                                    <img
                                        src={explore1Img}
                                        alt="Titanium iPhone"
                                        className="feature-text g_grow"
                                    />
                                    <img
                                        src={explore2Img}
                                        alt="Titanium 2 iPhone"
                                        className="feature-text g_grow"
                                    />
                                </div>
                            </div>
                            <div className="feature-text-container">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        The iPhone 15 Pro is the latest iteration of the iPhone, featuring a new design and a more powerful processor. It's the perfect device for those who want to stay connected and productive, while enjoying the latest in technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features