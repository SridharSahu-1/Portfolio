// import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  Environment,
  useGLTF,
  ContactShadows,
  // OrbitControls,
} from "@react-three/drei";

const Model = (props) => {
  const group = useRef();
  // Load model
  const { nodes, materials } = useGLTF("models/Mac.glb");

  // Make it float
  // useFrame((state) => {
    // const t = state.clock.getElapsedTime();
    // group.current.rotation.x = THREE.MathUtils.lerp(
    //   group.current.rotation.x,
    //   Math.cos(t / 2) / 20 + 0.25,
    //   0.1
    // );
    // group.current.rotation.y = THREE.MathUtils.lerp(
    //   group.current.rotation.y,
    //   Math.sin(t / 4) / 20,
    //   0.1
    // );
    // group.current.rotation.z = THREE.MathUtils.lerp(
    //   group.current.rotation.z,
    //   Math.sin(t / 8) / 20,
    //   0.1
    // );
    // group.current.position.y = THREE.MathUtils.lerp(
    //   group.current.position.y,
    //   (-2 + Math.sin(t / 2)) / 2,
    //   0.1
    // );
  // });
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>
            <Html
              className="w-[334px] h-[216px] bg-[#f0f0f0] overflow-hidden p-0"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <div
                className="w-[668px] h-[438px] scale-50 origin-top-left"
                onPointerDown={(e) => e.stopPropagation()}
              >
                <iframe
                  className="w-full h-full"
                  src={props.projectUrl}
                ></iframe>
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
};

const Macbook = ({ projectUrl }) => {
  return (
    <Canvas camera={{ position: [-5, 8, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, 3.49, 0]} position={[0, 1, 0]}>
          <Model projectUrl={projectUrl} scale={1.3} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      {/* <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={1 / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      /> */}
    </Canvas>
  );
};

export default Macbook;
