import { useEffect, useRef } from "react";
import * as THREE from "three";

export const StarsCanvas3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    currentMount.appendChild(renderer.domElement);

    const starCount = 350;
    const starCoords = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starCoords[i] = (Math.random() - 0.5) * 600;
      starCoords[i + 1] = (Math.random() - 0.5) * 600;
      starCoords[i + 2] = (Math.random() - 0.5) * 600;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starCoords, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 1.2,
      transparent: true,
      opacity: 0.6,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const handleResize = () => {
      if (!currentMount) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      stars.rotation.x -= 0.0002;
      stars.rotation.y -= 0.0003;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};
