import { View, PerspectiveCamera } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react"
import IPhone from "./IPhone"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

const ModelView = ({
    index,
    groupRef,
    gsaptype,
    controlRef,
    item,
    size,
    setRotationState
}) =>
{
    return (
        <View
            index={index}
            id={gsaptype}
            className={`w-full h-full ${index === 2 ? 'right--100%[]' : ''}`}
        >
            {/* Ambient light */}
            <ambientLight intensity={0.5} />

            {/* Camera */}
            <PerspectiveCamera
                ref={controlRef}
                makeDefault
                position={[0, 0, 4]}
            />
            <Lights />
            <OrbitControls 
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthAngle())}
            />
            <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
                <Suspense fallback={<div>Loading..</div>}>
                    <IPhone 
                        scale={index === 1 ? [15,15,15]:[17,17,17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelView