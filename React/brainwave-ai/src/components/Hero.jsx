import { curve, heroBackground, robot } from "../../public/assets"
import Button from "./Button"
import Section from "./Section"
import { BackgroundCircles, BottomLine, Gradient, } from "./design/Hero"
import { heroIcons } from "../constants"
import { ScrollParallax } from "react-just-parallax"
import { useRef } from "react"

const Hero = () =>
{
    const parallexRef = useRef(null);
    return (
        <Section
            className='pt-[12rem] -mt-[5.25rem]'
            crosses
            crossesOffset='lg:translate-y-[5.25rem]'
            id="hero"
        >
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="h1 mb-6">
                        Explore The Possiblities of AI chatting with Brain Wave
                        <span className="inline-block relative ">
                            {" "} Brainwave
                            <img
                                className="absolute top-full left-0 w-full xl:mt-2"
                                src={curve}
                                alt="curve"
                                width={624}
                                height={28}
                            />
                        </span>
                    </h1>
                    <p
                        className="mt-10 lg:mt-16 body-1 max-w-3xl mx-auto mb-6 lg:mb-8"
                    >
                        Unlease the power of AI chatbots with Brainwave, a cutting-edge platform that harnesses the
                        power of AI to transform the way you interact with technology.
                    </p>
                    <Button
                        href='/pricing'
                        white
                    >
                        Get Started
                    </Button>
                </div>
                <div className="relative max-2-[23re] mx-auto
                md:max-w-5xl xl:mb-22
                ">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="reltive bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img
                                    src={robot}
                                    className="w-full scale-[1.7] translate-y-[8%] md:scale-100 md:-tanslate-y-[10%] lg:-translate-y-[20%]"
                                    width={1024}
                                    height={490}
                                    alt="ai"
                                />
                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                        {heroIcons.map((icon, index) => (
                                            <li className="p-5" key={index}>
                                                <img src={icon} width={24} height={25} alt={icon} />
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>

                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            className="w-full"
                            alt="hero"
                            width={1440}
                            height={1800}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Hero