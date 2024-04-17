import { Canvas } from '@react-three/fiber'

const CanvasContainer = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
      </mesh>
    </Canvas>
  )
}

export default CanvasContainer