import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ModelView from "./ModelView"
import { useRef, useState, useEffect } from "react"
import { yellowImg } from "../utils"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import { View } from "@react-three/drei"
import { models, sizes } from "../constants"
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () =>
{
    const [size, setSize] = useState('small')
    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8f8881', '#ffe789', '#6f6c64'],
        image: yellowImg
    })

    useGSAP(() =>
    {
        gsap.to("#heading", {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power1.inOut"
        })
    })


    // Camera control for model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // Models
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // rotational values
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline();

    useEffect(() =>
    {
        if (size === 'large')
        {
            animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2
            })
        }

        if (size === 'small')
        {
            animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2
            })
        }
    }, [size])

    useGSAP(() =>
    {
        gsap.to('#heading', { y: 0, opacity: 1 })
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">
                    Take a closer look
                </h1>
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                        {/* Model */}
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsaptype='view1'
                            controlRef={cameraControlSmall}
                            item={model}
                            size={size}
                            setRotationState={setSmallRotation}
                        />
                        {/* Large Model */}
                        <ModelView
                            index={2}
                            groupRef={large}
                            gsaptype='view2'
                            controlRef={cameraControlLarge}
                            item={model}
                            size={size}
                            setRotationState={setLargeRotation}
                        />
                        <Canvas
                            className="w-full h-full"
                            style={{
                                position: 'fixed',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden'
                            }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>
                    <div className="max-auto w-full">
                        <p className="text-sm font-light text-center mb-5">{model.title}</p>
                        <div className="flex-center">
                            <ul className="color-container">
                                {
                                    models.map((model, index) =>
                                    {
                                        return (
                                            <li key={index} className="color-item w-6 h-6 rounded-full mx-2 cursor-pointer"
                                                style={{ backgroundColor: model.color[0] }}
                                                onClick={() => setModel(model)}
                                            />
                                        )
                                    })
                                }
                            </ul>
                            <button className="size-btn-container">
                                {
                                    sizes.map(({label,value}) =>
                                    (
                                        <span key={label}
                                            className="size-btn"
                                            style={{backgroundColor: size === value ? '#fff' : 'transparent',color: size === value ? '#000' : '#fff'}}
                                            onClick={() => setSize(value)}
                                        >
                                            {label}
                                        </span>
                                    ))
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model