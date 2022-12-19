import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AirbitatModel } from "../raw/Airbitat";

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function Airbitat() {
  return (
    <Canvas camera={
      {
        position: [8, 5, 8]
      }
    }>
      <Suspense fallback={<Loader />}>
        <ambientLight />
        <spotLight intensity={1} angle={0.1} penumbra={1} position={[0, 80, 0]} castShadow />
        <spotLight intensity={1} angle={0.1} penumbra={1} position={[0, -50, 0]} castShadow />
        <AirbitatModel />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Suspense>
    </Canvas>
  )
}

export default Airbitat