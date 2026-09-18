import { useEffect, useRef } from "react";
import * as THREE from "three";

export const EarthCanvas3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 360;
    const height = currentMount.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Base Globe Sphere
    const globeGeo = new THREE.SphereGeometry(1.8, 64, 64);
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.7,
      metalness: 0.3,
      emissive: 0x020617,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globe);

    // 2. Wireframe / Lat-Long Grid Mesh
    const gridGeo = new THREE.SphereGeometry(1.81, 24, 24);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    globeGroup.add(gridMesh);

    // 3. Glowing Atmospheric Halo Ring
    const ringGeo = new THREE.TorusGeometry(2.15, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
    });
    const haloRing = new THREE.Mesh(ringGeo, ringMat);
    haloRing.rotation.x = Math.PI / 2.5;
    globeGroup.add(haloRing);

    // 4. Dot Matrix Continents Simulation
    const dotsCount = 400;
    const positions = new Float32Array(dotsCount * 3);
    for (let i = 0; i < dotsCount * 3; i += 3) {
      const radius = 1.83;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    const dotsGeo = new THREE.BufferGeometry();
    dotsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const dotsMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const dotsCloud = new THREE.Points(dotsGeo, dotsMat);
    globeGroup.add(dotsCloud);

    // 5. Glowing Pinpoint (Pune, India approx coordinate)
    const lat = 18.52 * (Math.PI / 180);
    const lon = -73.85 * (Math.PI / 180);
    const pinRadius = 1.84;
    const px = pinRadius * Math.cos(lat) * Math.sin(lon);
    const py = pinRadius * Math.sin(lat);
    const pz = pinRadius * Math.cos(lat) * Math.cos(lon);

    const pinGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.set(px, py, pz);
    globeGroup.add(pin);

    // Pin Pulsing Ring
    const pinRingGeo = new THREE.RingGeometry(0.08, 0.12, 32);
    const pinRingMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const pinRing = new THREE.Mesh(pinRingGeo, pinRingMat);
    pinRing.position.set(px, py, pz);
    pinRing.lookAt(px * 2, py * 2, pz * 2);
    globeGroup.add(pinRing);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x06b6d4, 2.5);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 2.0);
    dirLight2.position.set(-5, -3, -2);
    scene.add(dirLight2);

    // Drag / Orbit Tracking
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouse.x;
      const deltaY = e.clientY - prevMouse.y;
      globeGroup.rotation.y += deltaX * 0.01;
      globeGroup.rotation.x += deltaY * 0.01;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouse.x;
      const deltaY = e.touches[0].clientY - prevMouse.y;
      globeGroup.rotation.y += deltaX * 0.01;
      globeGroup.rotation.x += deltaY * 0.01;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    domElement.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      if (!isDragging) {
        globeGroup.rotation.y += 0.004;
      }

      const scale = 1 + Math.sin(time * 3) * 0.25;
      pinRing.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domElement.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      globeGeo.dispose();
      globeMat.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      dotsGeo.dispose();
      dotsMat.dispose();
      pinGeo.dispose();
      pinMat.dispose();
      pinRingGeo.dispose();
      pinRingMat.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center relative w-full h-[320px] sm:h-[380px] cursor-grab active:cursor-grabbing">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute bottom-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-[11px] font-mono text-cyan-300 flex items-center gap-2 backdrop-blur-sm shadow-md">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span>Location: Pune, India (18.52° N, 73.85° E)</span>
      </div>
    </div>
  );
};
