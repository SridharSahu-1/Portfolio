import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../hooks/useMobile";

const Model = (props: any) => {
  const group = useRef<any>();
  const screenRef = useRef<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Load model - fallback to a simple geometry if model doesn't exist
  let nodes: any, materials: any;
  try {
    const gltf = useGLTF("models/Mac.glb");
    nodes = gltf.nodes;
    materials = gltf.materials;
  } catch (error) {
    // Fallback if model doesn't exist
    nodes = {};
    materials = {};
  }

  useEffect(() => {
    // Close and reopen animation when projectUrl changes
    setIsOpen(false);
    setIsLoading(true);
    setIframeLoading(true);

    const reopenTimer = setTimeout(() => {
      setIsOpen(true);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(reopenTimer);
  }, [props.projectUrl]);

  useFrame(() => {
    if (screenRef.current) {
      // Smooth opening/closing animation
      const targetRotation = isOpen ? -0.425 : 1.5;
      screenRef.current.rotation.x +=
        (targetRotation - screenRef.current.rotation.x) * 0.1;
    }
  });

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  // Simple fallback MacBook representation
  const FallbackMacbook = () => (
    <group ref={group} {...props} dispose={null}>
      {/* Screen */}
      <group ref={screenRef} rotation-x={-1.5} position={[0, 0, 0]}>
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[4, 2.5, 0.1]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>

        {/* Screen Content */}
        <Html
          className="w-[300px] h-[200px] bg-[#f0f0f0] overflow-hidden"
          rotation-x={-Math.PI / 2}
          position={[0, 1, 0.1]}
          transform
          occlude
        >
          <div
            className="w-[600px] h-[400px] scale-50 origin-top-left relative"
            onPointerDown={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {isOpen && !isLoading && (
                <motion.div
                  key={props.projectUrl}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <iframe
                    className="w-full h-full"
                    src={props.projectUrl}
                    title="Project Preview"
                    onLoad={handleIframeLoad}
                  />
                  {iframeLoading && (
                    <div className="absolute inset-0 bg-white flex items-center justify-center">
                      <div className="text-gray-600 text-center">
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 animate-spin mb-3"></div>
                        <p className="text-xs">Loading content...</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {(isLoading || !isOpen) && (
              <motion.div
                className="w-full h-full bg-black flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white text-center">
                  <div className="w-16 h-16 border-4 border-white border-t-transparent animate-spin mx-auto mb-4"></div>
                  <p className="text-sm">
                    {isLoading ? "Loading..." : "Opening..."}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </Html>
      </group>

      {/* Base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[4.2, 0.2, 3]} />
        <meshStandardMaterial color="#c0c0c0" />
      </mesh>

      {/* Keyboard area */}
      <mesh position={[0, 0, 0.5]}>
        <boxGeometry args={[3.8, 0.05, 2.5]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );

  // If we have the GLTF model, use it, otherwise use fallback
  if (nodes.Cube008) {
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
                className="w-[334px] h-[216px] bg-[#f0f0f0] overflow-hidden p-0"
                rotation-x={-Math.PI / 2}
                position={[0, 0.05, -0.09]}
                transform
                occlude
                style={{ zIndex: 0 }}
              >
                <div
                  className="w-[668px] h-[438px] scale-50 origin-top-left relative"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <AnimatePresence mode="wait">
                    {isOpen && !isLoading && (
                      <motion.div
                        key={props.projectUrl}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full h-full relative"
                      >
                        <iframe
                          className="w-full h-full"
                          src={props.projectUrl}
                          title="Project Preview"
                          onLoad={handleIframeLoad}
                        />
                        {iframeLoading && (
                          <div className="absolute inset-0 bg-white flex items-center justify-center">
                            <div className="text-gray-600 text-center">
                              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 animate-spin mb-3"></div>
                              <p className="text-xs">Loading content...</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {(isLoading || !isOpen) && (
                    <motion.div
                      className="w-full h-full bg-black flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white text-center">
                        <div className="w-16 h-16 border-4 border-white border-t-transparent animate-spin mx-auto mb-4"></div>
                        <p className="text-sm">
                          {isLoading ? "Loading..." : "Opening..."}
                        </p>
                      </div>
                    </motion.div>
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
  }

  return <FallbackMacbook />;
};

const Macbook = ({ projectUrl }: { projectUrl: string }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(max-width: 1350px)");

  return (
    <Canvas camera={{ position: [-5, 10, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <group rotation={[0, 3.49, 0]} position={[0, 0, 0]}>
          <Model
            projectUrl={projectUrl}
            scale={isMobile ? 0.5 : isDesktop ? 1.1 : 1.5}
          />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
    </Canvas>
  );
};

export default Macbook;
