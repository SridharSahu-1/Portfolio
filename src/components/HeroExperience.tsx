import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeroBoy from "./HeroBoy";

const HeroExperience = () => {
  return (
    <Canvas>
      <ambientLight />

      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#ff28d5"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1c34ff"} />

      <Sparkles
        size={2}
        count={500}
        color={"pink"}
        speed={0.5}
        scale={[50, 10, 2]}
      />
      <group>
        <HeroBoy scale={9} position={[0, -15, 0]} />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
