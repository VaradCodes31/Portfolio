import { useEffect, useRef } from "react";
import * as THREE from "three";

export const BallCanvas3D = ({ iconName, name, color = "#06b6d4", isSelected = false, onSelect }) => {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragDistanceRef = useRef(0);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 110;
    const height = currentMount.clientHeight || 110;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Create Canvas Texture for the Tech Badge Decal
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    // Draw stylized tech face on canvas
    ctx.fillStyle = isSelected ? "#0f172a" : "#111827";
    ctx.fillRect(0, 0, 256, 256);

    // Glowing circle accent
    ctx.strokeStyle = color;
    ctx.lineWidth = isSelected ? 14 : 10;
    ctx.beginPath();
    ctx.arc(128, 128, 100, 0, Math.PI * 2);
    ctx.stroke();

    // Text Label
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 34px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(iconName || name, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    // Create Icosahedron Mesh
    const geometry = new THREE.IcosahedronGeometry(1.35, 1);
    const material = new THREE.MeshStandardMaterial({
      color: isSelected ? 0x243048 : 0x1f293d,
      map: texture,
      roughness: 0.35,
      metalness: 0.65,
      flatShading: true,
    });
    const ball = new THREE.Mesh(geometry, material);
    scene.add(ball);

    // Wireframe overlay for tech polish
    const wireframeGeo = new THREE.IcosahedronGeometry(1.36, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: isSelected ? 0.8 : 0.4,
    });
    const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(wireframe);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isSelected ? 1.8 : 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const pointLight = new THREE.PointLight(new THREE.Color(color), isSelected ? 3.5 : 2.5, 10);
    pointLight.position.set(-3, -3, 2);
    scene.add(pointLight);

    // Drag / Hover / Click Interaction
    let prevMousePos = { x: 0, y: 0 };
    let velocity = { x: 0.006, y: 0.008 };

    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      dragDistanceRef.current = 0;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      dragDistanceRef.current += Math.abs(deltaX) + Math.abs(deltaY);
      ball.rotation.y += deltaX * 0.015;
      ball.rotation.x += deltaY * 0.015;
      wireframe.rotation.y = ball.rotation.y;
      wireframe.rotation.x = ball.rotation.x;
      velocity = { x: deltaY * 0.003, y: deltaX * 0.003 };
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      if (isDraggingRef.current && dragDistanceRef.current < 5) {
        if (onSelect) onSelect(name);
      }
      isDraggingRef.current = false;
    };

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        dragDistanceRef.current = 0;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      const deltaY = e.touches[0].clientY - prevMousePos.y;
      dragDistanceRef.current += Math.abs(deltaX) + Math.abs(deltaY);
      ball.rotation.y += deltaX * 0.015;
      ball.rotation.x += deltaY * 0.015;
      wireframe.rotation.y = ball.rotation.y;
      wireframe.rotation.x = ball.rotation.x;
      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      if (isDraggingRef.current && dragDistanceRef.current < 8) {
        if (onSelect) onSelect(name);
      }
      isDraggingRef.current = false;
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
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDraggingRef.current) {
        ball.rotation.y += velocity.y;
        ball.rotation.x += velocity.x;
        wireframe.rotation.y = ball.rotation.y;
        wireframe.rotation.x = ball.rotation.x;

        velocity.x += (0.004 - velocity.x) * 0.02;
        velocity.y += (0.006 - velocity.y) * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domElement.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      domElement.removeEventListener("touchend", onTouchEnd);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      texture.dispose();
    };
  }, [iconName, name, color, isSelected, onSelect]);

  return (
    <div
      onClick={() => onSelect && onSelect(name)}
      className={`flex flex-col items-center gap-2 group cursor-pointer select-none p-2 rounded-2xl transition-all duration-300 ${
        isSelected
          ? "bg-slate-800/80 ring-2 ring-cyan-400 scale-105 shadow-xl shadow-cyan-500/10"
          : "hover:bg-slate-800/40 hover:scale-105"
      }`}
    >
      <div
        ref={mountRef}
        className="w-[100px] h-[100px] sm:w-[115px] sm:h-[115px]"
      />
      <span
        className={`text-xs font-mono font-medium transition-colors ${
          isSelected ? "text-cyan-400 font-bold" : "text-slate-300 group-hover:text-cyan-400"
        }`}
      >
        {name}
      </span>
      {isSelected && (
        <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30">
          Active
        </span>
      )}
    </div>
  );
};
