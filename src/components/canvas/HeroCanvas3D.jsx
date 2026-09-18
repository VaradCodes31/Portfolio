import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Cpu, Atom, ShieldAlert, RefreshCw, Eye, Sparkles } from "lucide-react";

export const HeroCanvas3D = () => {
  const mountRef = useRef(null);
  const [activeMode, setActiveMode] = useState("neural"); // 'neural' | 'quantum' | 'cyber'
  const [wireframeOnly, setWireframeOnly] = useState(false);
  const [telemetry, setTelemetry] = useState({
    state: "Fourier Neural Operator (3D FNO)",
    metric: "Loss: 0.0024 • R²: 0.9977",
    status: "Simulation Nominal",
  });

  const sceneRef = useRef(null);
  const objectsRef = useRef({});

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = currentMount.clientWidth || 480;
    const height = currentMount.clientHeight || 420;

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

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- Mode 1: Neural Operator Core ---
    const neuralGroup = new THREE.Group();
    masterGroup.add(neuralGroup);

    const neuralGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const neuralMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
      metalness: 0.8,
    });
    const neuralMesh = new THREE.Mesh(neuralGeo, neuralMat);
    neuralGroup.add(neuralMesh);

    const innerSphereGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const innerSphereMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.8,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    neuralGroup.add(innerSphere);

    // --- Mode 2: Quantum Bloch Sphere ---
    const quantumGroup = new THREE.Group();
    quantumGroup.visible = false;
    masterGroup.add(quantumGroup);

    const blochSphereGeo = new THREE.SphereGeometry(1.7, 24, 24);
    const blochSphereMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const blochSphere = new THREE.Mesh(blochSphereGeo, blochSphereMat);
    quantumGroup.add(blochSphere);

    // Quantum Axis Arrows (|0> at top, |1> at bottom, |psi> vector)
    const arrowHelperZ = new THREE.ArrowHelper(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 0, 0),
      2.2,
      0x10b981,
      0.3,
      0.15
    );
    quantumGroup.add(arrowHelperZ);

    const stateVectorDir = new THREE.Vector3(1, 1, 0.8).normalize();
    const arrowStateVector = new THREE.ArrowHelper(
      stateVectorDir,
      new THREE.Vector3(0, 0, 0),
      1.9,
      0xf59e0b,
      0.35,
      0.2
    );
    quantumGroup.add(arrowStateVector);

    // Quantum Latitude Rings
    const qRingGeo = new THREE.TorusGeometry(1.72, 0.02, 16, 80);
    const qRingMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.6 });
    const qRing = new THREE.Mesh(qRingGeo, qRingMat);
    qRing.rotation.x = Math.PI / 2;
    quantumGroup.add(qRing);

    // --- Mode 3: Cyber SOC Threat Ring ---
    const cyberGroup = new THREE.Group();
    cyberGroup.visible = false;
    masterGroup.add(cyberGroup);

    const torusGeo1 = new THREE.TorusGeometry(1.8, 0.06, 16, 100);
    const torusMat1 = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x064e3b,
      emissiveIntensity: 0.9,
      roughness: 0.2,
    });
    const cyberRing1 = new THREE.Mesh(torusGeo1, torusMat1);
    cyberRing1.rotation.x = Math.PI / 3;
    cyberGroup.add(cyberRing1);

    const torusGeo2 = new THREE.TorusGeometry(2.2, 0.03, 16, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
    });
    const cyberRing2 = new THREE.Mesh(torusGeo2, torusMat2);
    cyberRing2.rotation.y = Math.PI / 4;
    cyberGroup.add(cyberRing2);

    // Surrounding Particle Constellation
    const particleCount = 100;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 2.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      posArray[i] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particleCloud);

    // Save refs for mode switching
    objectsRef.current = {
      neuralGroup,
      quantumGroup,
      cyberGroup,
      neuralMesh,
      innerSphere,
      blochSphere,
      arrowStateVector,
      particleCloud,
      masterGroup,
    };

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x06b6d4, 3, 20);
    light1.position.set(4, 4, 4);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x8b5cf6, 3, 20);
    light2.position.set(-4, -4, 2);
    scene.add(light2);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = mouseX * 0.7;
      targetRotX = -mouseY * 0.7;
    };

    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Damping
      masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.05;
      masterGroup.position.y = Math.sin(time * 1.5) * 0.1;

      // Rotate sub components
      neuralMesh.rotation.x = time * 0.2;
      neuralMesh.rotation.y = time * 0.25;
      blochSphere.rotation.y = time * 0.15;
      cyberRing1.rotation.z = time * 0.35;
      cyberRing2.rotation.x = time * 0.25;
      particleCloud.rotation.y = -time * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Handle Mode Switch
  const switchMode = (mode) => {
    setActiveMode(mode);
    const { neuralGroup, quantumGroup, cyberGroup, arrowStateVector } = objectsRef.current;
    if (!neuralGroup) return;

    if (mode === "neural") {
      neuralGroup.visible = true;
      quantumGroup.visible = false;
      cyberGroup.visible = false;
      setTelemetry({
        state: "Fourier Neural Operator (3D FNO)",
        metric: "Resolution: 64³ Voxel • R²: 0.9977",
        status: "Continuous Surrogate Inference Active",
      });
    } else if (mode === "quantum") {
      neuralGroup.visible = false;
      quantumGroup.visible = true;
      cyberGroup.visible = false;
      // Mutate quantum vector
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const dir = new THREE.Vector3(
        Math.sin(theta) * Math.cos(phi),
        Math.cos(theta),
        Math.sin(theta) * Math.sin(phi)
      ).normalize();
      arrowStateVector.setDirection(dir);
      setTelemetry({
        state: "Qubit Bloch Sphere |ψ⟩",
        metric: "State: α|0⟩ + β|1⟩ • 1024 Shots Sim",
        status: "Qiskit Noise Channel: Depolarizing (0.02)",
      });
    } else if (mode === "cyber") {
      neuralGroup.visible = false;
      quantumGroup.visible = false;
      cyberGroup.visible = true;
      setTelemetry({
        state: "NetSage Telemetry Stream",
        metric: "XGBoost Engine • 99.88% Accuracy",
        status: "2.8M+ Flow Stream Protected",
      });
    }
  };

  // Pulse / Perturb Simulation
  const triggerSimulationPulse = () => {
    const { neuralMesh, innerSphere, arrowStateVector } = objectsRef.current;
    if (activeMode === "quantum" && arrowStateVector) {
      const dir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();
      arrowStateVector.setDirection(dir);
      setTelemetry((prev) => ({
        ...prev,
        metric: `Quantum Phase Shift Applied • θ=${(Math.random() * Math.PI).toFixed(2)} rad`,
      }));
    } else if (innerSphere) {
      innerSphere.scale.set(1.4, 1.4, 1.4);
      setTimeout(() => innerSphere.scale.set(1, 1, 1), 300);
      setTelemetry((prev) => ({
        ...prev,
        status: "Inference Forward Pass Executed (< 0.85s)",
      }));
    }
  };

  // Toggle wireframe mode
  const toggleWireframe = () => {
    const { neuralMesh, innerSphere } = objectsRef.current;
    const nextState = !wireframeOnly;
    setWireframeOnly(nextState);
    if (neuralMesh) neuralMesh.material.wireframe = true;
    if (innerSphere) innerSphere.material.wireframe = nextState;
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Canvas Viewport */}
      <div
        ref={mountRef}
        className="w-full h-[300px] sm:h-[350px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
      />

      {/* Interactive Functional Controls Bar */}
      <div className="w-full mt-2 pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
        {/* Mode Selector Tabs */}
        <div className="flex items-center justify-between gap-1 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-xs font-mono">
          <button
            onClick={() => switchMode("neural")}
            className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeMode === "neural"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Cpu size={13} /> Neural FNO
          </button>
          <button
            onClick={() => switchMode("quantum")}
            className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeMode === "quantum"
                ? "bg-violet-500/20 text-violet-400 border border-violet-500/40 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Atom size={13} /> Quantum Qubit
          </button>
          <button
            onClick={() => switchMode("cyber")}
            className={`flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeMode === "cyber"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ShieldAlert size={13} /> IDS Security
          </button>
        </div>

        {/* Live Functional Telemetry Box & Action Triggers */}
        <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-slate-300">
          <div className="flex flex-col truncate">
            <span className="text-cyan-400 font-bold truncate flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {telemetry.state}
            </span>
            <span className="text-slate-400 text-[10px] truncate">{telemetry.metric}</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={triggerSimulationPulse}
              title="Execute Simulation Step"
              className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 hover:border-cyan-500/50 flex items-center gap-1 transition-colors"
            >
              <RefreshCw size={11} /> Simulate
            </button>
            <button
              onClick={toggleWireframe}
              title="Toggle Mesh Wireframe"
              className={`p-1.5 rounded-md border transition-colors ${
                wireframeOnly
                  ? "bg-cyan-500/20 border-cyan-500 text-cyan-300"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
              }`}
            >
              <Eye size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
