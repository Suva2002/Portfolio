import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export const AnimatedScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="absolute inset-0"
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls
        enableDamping
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />

      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />

      {/* Animated Cube */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="#00d9ff" wireframe />
      </mesh>

      {/* Particles */}
      <ParticleField />
    </Canvas>
  )
}

const ParticleField = () => {
  const particles = new Float32Array(300 * 3)

  for (let i = 0; i < 300 * 3; i += 3) {
    particles[i] = (Math.random() - 0.5) * 20
    particles[i + 1] = (Math.random() - 0.5) * 20
    particles[i + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#00d9ff" sizeAttenuation />
    </points>
  )
}
