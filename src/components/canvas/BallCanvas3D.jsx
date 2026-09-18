import { useEffect, useRef } from "react";
import * as THREE from "three";

export const BallCanvas3D = ({ iconName, name, color = "#06b6d4" }) => {
  const mountRef = useRef(null);

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
    ctx.fillStyle = "#111827";
    ctx.fillRect(0, 0, 256, 256);

    // Glowing circle accent
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(128, 128, 100, 0, Math.PI * 2);
    ctx.stroke();

    // Text Label
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 32px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(iconName || name, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    // Create Icosahedron Mesh (Adrian Hajdin 3D Ball style)
    const geometry = new THREE.IcosahedronGeometry(1.35, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x1f293d,
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
      opacity: 0.4,
    });
    const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(wireframe);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const pointLight = new THREE.PointLight(new THREE.Color(color), 2.5, 10);
    pointLight.position.set(-3, -3, 2);
    scene.add(pointLight);

    // Drag / Hover Interaction
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let velocity = { x: 0.006, y: 0.008 };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      ball.rotation.y += deltaX * 0.015;
      ball.rotation.x += deltaY * 0.015;
      wireframe.rotation.y = ball.rotation.y;
      wireframe.rotation.x = ball.rotation.x;
      velocity = { x: deltaY * 0.003, y: deltaX * 0.003 };
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile responsiveness
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      const deltaY = e.touches[0].clientY - prevMousePos.y;
      ball.rotation.y += deltaX * 0.015;
      ball.rotation.x += deltaY * 0.015;
      wireframe.rotation.y = ball.rotation.y;
      wireframe.rotation.x = ball.rotation.x;
      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
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
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDragging) {
        // Natural rotational inertia & floating
        ball.rotation.y += velocity.y;
        ball.rotation.x += velocity.x;
        wireframe.rotation.y = ball.rotation.y;
        wireframe.rotation.x = ball.rotation.x;

        // Damping velocity toward idle drift
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
      window.removeEventListener("touchend", onTouchEnd);
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
  }, [iconName, name, color]);

  return (
    <div className="flex flex-col items-center gap-2 group cursor-grab active:cursor-grabbing select-none">
      <div
        ref={mountRef}
        className="w-[105px] h-[105px] sm:w-[120px] sm:h-[120px] transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-xs font-mono font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">
        {name}
      </span>
    </div>
  );
};
