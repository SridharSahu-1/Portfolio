import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";

const Model = (props) => {
  const group = useRef();
  const screenRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  // Load model
  const { nodes, materials } = useGLTF("models/Mac.glb");

  useEffect(() => {
    // Start opening animation after component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [props.projectUrl]);

  useFrame((state) => {
    if (screenRef.current) {
      // Smooth opening animation
      const targetRotation = isOpen ? -0.425 : 1.5;
      screenRef.current.rotation.x +=
        (targetRotation - screenRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={screenRef} rotation-x={-1.5} position={[0, -0.04, 0.41]}>
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
              className="w-[334px] h-[216px] bg-[#f0f0f0] overflow-hidden p-0 rounded-lg"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <div
                className="w-[668px] h-[438px] scale-50 origin-top-left"
                onPointerDown={(e) => e.stopPropagation()}
              >
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={props.projectUrl}
                      title="Project Preview"
                    />
                  </motion.div>
                )}
                {!isOpen && (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-sm">Opening...</p>
                    </div>
                  </div>
                )}
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
    </Canvas>
  );
};

export default Macbook;
