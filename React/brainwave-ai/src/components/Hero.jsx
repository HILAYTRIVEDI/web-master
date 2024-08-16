import { curve } from "../../public/assets"
import Button from "./Button"
import Section from "./Section"

const Hero = () =>
{
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
            </div>
        </Section>
    )
}

export default Hero