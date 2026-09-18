import { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroCanvas3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = currentMount.clientWidth || 500;
    const height = currentMount.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 2. Objects: Neural Fourier Waveform / Geometric Qubit Core
    const group = new THREE.Group();
    scene.add(group);

    // Core Icosahedron wireframe
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Inner glowing sphere (Quantum State Core)
    const innerGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x6d28d9,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Orbital Quantum Rings
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // Surrounding Neural Node Particles
    const particlesCount = 80;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const r = 2.8 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      posArray[i] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = r * Math.cos(phi);
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8,
    });
    const particleCloud = new THREE.Points(particlesGeo, particlesMat);
    group.add(particleCloud);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 3, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 3, 20);
    pointLight2.position.set(-4, -4, 2);
    scene.add(pointLight2);

    // 4. Mouse tracking & Smooth Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 5. Responsive Resize
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // 6. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle Rotation
      coreMesh.rotation.x = elapsedTime * 0.2;
      coreMesh.rotation.y = elapsedTime * 0.25;

      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.x = elapsedTime * 0.3;

      particleCloud.rotation.y = -elapsedTime * 0.1;

      // Mouse Proximity Damping
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

      // Gentle floating oscillation
      group.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    />
  );
};
