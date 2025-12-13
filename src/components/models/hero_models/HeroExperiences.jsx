import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />

      {/* Configure OrbitControls - now enabled on mobile too! */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={true} // Enable zoom on all devices
        enableRotate={true} // Enable rotation on all devices - allows mobile interaction
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        {/* Add environment for better lighting on desktop */}
        {!isMobile && <Environment preset="city" />}

        <HeroLights />
        <Particles count={50} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>

      {/* Add post-processing effects only on desktop for performance */}
      {!isMobile && (
        <EffectComposer>
          <Bloom
            intensity={0.3}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.9}
          />
          <DepthOfField focusDistance={0.01} focalLength={0.2} bokehScale={3} />
        </EffectComposer>
      )}
    </Canvas>
  );
};

export default HeroExperience;
