import { Canvas } from "@react-three/fiber";
import Loadoff from "./Loadoff";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CanvasContainer = () => {
  return (
    <Canvas
      camera={{
        position: [3.5, 1, 3.5],
      }}
      scene={{position: [1, 0, -1]}}
    >
      <ambientLight />
      <directionalLight color="#bae6fd" intensity={5} position={[1, 1, -1]} />
      <OrbitControls enableZoom={false} />
      <Loadoff />
    </Canvas>
  );
};

export default CanvasContainer;
