import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  Float,
  MeshDistortMaterial,
  Sphere,
} from "@react-three/drei";
import * as THREE from "three";
import { useIsMobile } from "../../utils/useDevice";

/**
 * The hero blob — a gooey, metallic, iridescent surface inspired by
 * blobmixer.14islands.com. Color, distortion and material respond to a
 * preset ("mix") and to the pointer. Press it to make it swell.
 */
const BlobMesh = ({ preset, isMobile }) => {
  const meshRef = useRef();
  const matRef = useRef();
  const pressed = useRef(false);

  // working colors, lerped toward the active preset for a fluid "mix"
  const colorA = useRef(new THREE.Color(preset.colorA));
  const colorB = useRef(new THREE.Color(preset.colorB));
  const targetA = useRef(new THREE.Color());
  const targetB = useRef(new THREE.Color());

  // lighter geometry on small screens for smooth mobile performance
  const seg = isMobile ? 64 : 168;


  useFrame((state, delta) => {
    const mesh = meshRef.current;
    const mat = matRef.current;
    if (!mesh || !mat) return;

    const t = state.clock.getElapsedTime();
    const d = Math.min(delta, 0.05); // clamp for tab-switch jumps

    targetA.current.set(preset.colorA);
    targetB.current.set(preset.colorB);

    // gentle rotation + pointer-follow
    mesh.rotation.y += d * 0.18;
    mesh.rotation.x += (-state.pointer.y * 0.4 - mesh.rotation.x) * 0.05;
    mesh.rotation.z += (state.pointer.x * 0.18 - mesh.rotation.z) * 0.05;

    // breathing scale (+ swell while pressed)
    const goal =
      (1 + Math.sin(t * 0.9) * 0.02) * (pressed.current ? 1.08 : 1);
    const s = mesh.scale.x + (goal - mesh.scale.x) * 0.1;
    mesh.scale.setScalar(s);

    // smoothly mix colors
    colorA.current.lerp(targetA.current, 0.06);
    colorB.current.lerp(targetB.current, 0.06);
    mat.color.copy(colorA.current);
    mat.emissive.copy(colorB.current);

    // distortion + material ease toward preset, with a press boost
    const goalDistort = preset.distort + (pressed.current ? 0.22 : 0);
    mat.distort += (goalDistort - mat.distort) * 0.06;
    mat.metalness += (preset.metalness - mat.metalness) * 0.06;
    mat.roughness += (preset.roughness - mat.roughness) * 0.06;
  });


  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
      <Sphere
        ref={meshRef}
        args={[1.35, seg, seg]}
        onPointerDown={() => (pressed.current = true)}
        onPointerUp={() => (pressed.current = false)}
        onPointerOut={() => (pressed.current = false)}
      >
        <MeshDistortMaterial
          ref={matRef}
          color={preset.colorA}
          emissive={preset.colorB}
          emissiveIntensity={0.18}
          distort={preset.distort}
          speed={1.6}
          metalness={preset.metalness}
          roughness={preset.roughness}
          envMapIntensity={1.6}
        />
      </Sphere>
    </Float>
  );
};

const Satellites = () => {
  const positions = [
    [2.6, 1.4, -1.5],
    [-2.8, -1.1, -1.2],
    [2.2, -1.6, -0.8],
  ];
  return (
    <>
      {positions.map((p, i) => (
        <Float key={i} speed={2 + i} rotationIntensity={1} floatIntensity={2}>
          <mesh position={p}>
            <sphereGeometry args={[0.16 + i * 0.04, 48, 48]} />
            <meshStandardMaterial
              color="#f5f1ea"
              metalness={1}
              roughness={0.1}
              envMapIntensity={1.5}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};


const BlobCanvas = ({ preset }) => {
  const isMobile = useIsMobile();

  // On mobile: moderately further camera for a smaller but visible blob
  const fov = isMobile ? 52 : 42;
  const camZ = isMobile ? 9 : 5;

  // Pause the render loop whenever the hero is scrolled out of view (mobile only).
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (!isMobile) {
      setInView(true);
      return;
    }
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isMobile]);

  const frameloop = isMobile && !inView ? "never" : "always";

  const canvas = (
    <Canvas
      className="!touch-none"
      frameloop={frameloop}
      dpr={[1, isMobile ? 1.25 : 1.75]}
      camera={{ position: [0, 0, camZ], fov }}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? "default" : "high-performance",
      }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={18} color="#ffffff" />
      <pointLight position={[-6, -2, -4]} intensity={14} color="#b9a7ff" />
      <pointLight position={[4, -4, 2]} intensity={10} color="#ff9fc4" />

      <BlobMesh preset={preset} isMobile={isMobile} />
      {!isMobile && <Satellites />}

      {/* In-memory studio environment — pastel reflections, no external HDR */}
      <Environment resolution={isMobile ? 128 : 256}>
        <color attach="background" args={["#08070b"]} />
        <Lightformer form="circle" intensity={3} color="#b9a7ff" position={[0, 5, -9]} scale={6} />
        <Lightformer form="circle" intensity={2.4} color="#ff9fc4" position={[-5, 1, -6]} scale={4} />
        <Lightformer form="circle" intensity={2.2} color="#a8ecd0" position={[5, -1, -6]} scale={4} />
        <Lightformer form="ring" intensity={2} color="#9fd6ff" position={[0, -5, -8]} scale={5} />
        <Lightformer form="rect" intensity={1.5} color="#ffffff" position={[0, 0, 6]} scale={8} />
      </Environment>
    </Canvas>
  );

  // Desktop: canvas renders directly (no wrapper, always-on).
  // Mobile: wraps in a div for the IntersectionObserver pause.
  if (!isMobile) return canvas;

  return (
    <div ref={wrapRef} className="h-full w-full">
      {canvas}
    </div>
  );
};

export default BlobCanvas;
