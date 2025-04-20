import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
// import {HeroRoom} from './HeroRoom'
// import HeroLights from './HeroLights'
import {TubeRack} from './TubeRack'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={100}
                minDistance={60}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            {/* <HeroLights /> */}

            <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={2} />

            <group
                scale={isMobile ? 0.1 : 0.2}
                position={[0, -3.5, 0]}
                rotation={[5, 0, 1]}
            >
                <TubeRack />
            </group>
          
            {/* <mesh>
                <boxGeometry arg={[1, 1, 1]} />
                <meshStandardMaterial color="teal" />
            </mesh> */}
        </Canvas>
    )
}

export default HeroExperience