import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Cpu, Atom, ShieldAlert, RefreshCw, Eye, Sparkles, Play, CheckCircle2 } from "lucide-react";

export const HeroCanvas3D = () => {
  const mountRef = useRef(null);
  const [activeMode, setActiveMode] = useState("neural"); // 'neural' | 'quantum' | 'cyber'
  const [wireframeOnly, setWireframeOnly] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [telemetry, setTelemetry] = useState({
    title: "Fourier Neural Operator (3D FNO)",
    metric: "Loss: 0.0019 • R²: 0.9977 (4.75% L2)",
    status: "Surrogate Continuous Inference Active",
    color: "text-cyan-400",
  });

  const objectsRef = useRef({
    masterGroup: null,
    neuralGroup: null,
    quantumGroup: null,
    cyberGroup: null,
    neuralMesh: null,
    innerSphere: null,
    blochSphere: null,
    arrowStateVector: null,
    cyberRing1: null,
    cyberRing2: null,
    particleCloud: null,
    pulseSpeed: 1,
  });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const width = currentMount.clientWidth || 480;
    const height = currentMount.clientHeight || 380;

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

    // --- Mode 1: Neural Operator Core (FNO) ---
    const neuralGroup = new THREE.Group();
    neuralGroup.visible = true;
    masterGroup.add(neuralGroup);

    const neuralGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const neuralMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      roughness: 0.2,
      metalness: 0.8,
    });
    const neuralMesh = new THREE.Mesh(neuralGeo, neuralMat);
    neuralGroup.add(neuralMesh);

    const innerSphereGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const innerSphereMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x5b21b6,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.8,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    neuralGroup.add(innerSphere);

    // Neural Latent Orbit Rings
    const nRingGeo = new THREE.TorusGeometry(2.1, 0.02, 16, 80);
    const nRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 });
    const nRing = new THREE.Mesh(nRingGeo, nRingMat);
    nRing.rotation.x = Math.PI / 3;
    neuralGroup.add(nRing);

    // --- Mode 2: Quantum Bloch Sphere (SyndromeAI) ---
    const quantumGroup = new THREE.Group();
    quantumGroup.visible = false;
    masterGroup.add(quantumGroup);

    const blochSphereGeo = new THREE.SphereGeometry(1.65, 24, 24);
    const blochSphereMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const blochSphere = new THREE.Mesh(blochSphereGeo, blochSphereMat);
    quantumGroup.add(blochSphere);

    // |0> and |1> Axis Poles
    const arrowHelperZ = new THREE.ArrowHelper(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, -1.8, 0),
      3.6,
      0x10b981,
      0.3,
      0.15
    );
    quantumGroup.add(arrowHelperZ);

    // Superposition State Vector |ψ⟩
    const stateVectorDir = new THREE.Vector3(0.7, 0.7, 0.5).normalize();
    const arrowStateVector = new THREE.ArrowHelper(
      stateVectorDir,
      new THREE.Vector3(0, 0, 0),
      1.9,
      0xf59e0b,
      0.4,
      0.2
    );
    quantumGroup.add(arrowStateVector);

    // Quantum Equatorial Orbit Ring
    const qRingGeo = new THREE.TorusGeometry(1.66, 0.025, 16, 80);
    const qRingMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.7 });
    const qRing = new THREE.Mesh(qRingGeo, qRingMat);
    qRing.rotation.x = Math.PI / 2;
    quantumGroup.add(qRing);

    // --- Mode 3: Cyber Threat Intelligence Ring (NetSage IDS) ---
    const cyberGroup = new THREE.Group();
    cyberGroup.visible = false;
    masterGroup.add(cyberGroup);

    const torusGeo1 = new THREE.TorusGeometry(1.75, 0.05, 16, 100);
    const torusMat1 = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x047857,
      emissiveIntensity: 0.9,
      roughness: 0.2,
    });
    const cyberRing1 = new THREE.Mesh(torusGeo1, torusMat1);
    cyberRing1.rotation.x = Math.PI / 3;
    cyberGroup.add(cyberRing1);

    const torusGeo2 = new THREE.TorusGeometry(2.15, 0.035, 16, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.7,
    });
    const cyberRing2 = new THREE.Mesh(torusGeo2, torusMat2);
    cyberRing2.rotation.y = Math.PI / 4;
    cyberGroup.add(cyberRing2);

    const cyberCoreGeo = new THREE.OctahedronGeometry(1.1, 0);
    const cyberCoreMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0e7490,
      wireframe: true,
      metalness: 0.9,
    });
    const cyberCore = new THREE.Mesh(cyberCoreGeo, cyberCoreMat);
    cyberGroup.add(cyberCore);

    // Surrounding Particle Constellation
    const particleCount = 120;
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
      size: 0.05,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.75,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particleCloud);

    // Save refs for simulation triggers
    objectsRef.current = {
      masterGroup,
      neuralGroup,
      quantumGroup,
      cyberGroup,
      neuralMesh,
      innerSphere,
      blochSphere,
      arrowStateVector,
      cyberRing1,
      cyberRing2,
      cyberCore,
      particleCloud,
      pulseSpeed: 1,
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
      const time = clock.getElapsedTime() * objectsRef.current.pulseSpeed;

      // Mouse Inertia Damping
      masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.05;
      masterGroup.position.y = Math.sin(time * 1.5) * 0.1;

      // Mode-specific rotations
      neuralMesh.rotation.x = time * 0.2;
      neuralMesh.rotation.y = time * 0.25;

      blochSphere.rotation.y = time * 0.15;

      cyberRing1.rotation.z = time * 0.35;
      cyberRing2.rotation.x = time * 0.25;
      cyberCore.rotation.y = time * 0.4;

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
    const { neuralGroup, quantumGroup, cyberGroup } = objectsRef.current;
    if (!neuralGroup) return;

    if (mode === "neural") {
      neuralGroup.visible = true;
      quantumGroup.visible = false;
      cyberGroup.visible = false;
      setTelemetry({
        title: "Fourier Neural Operator (3D FNO)",
        metric: "Loss: 0.0019 • R²: 0.9977 (4.75% L2)",
        status: "Surrogate Continuous Inference Active",
        color: "text-cyan-400",
      });
    } else if (mode === "quantum") {
      neuralGroup.visible = false;
      quantumGroup.visible = true;
      cyberGroup.visible = false;
      setTelemetry({
        title: "Qubit Bloch Sphere |ψ⟩",
        metric: "Superposition: 0.707|0⟩ + 0.707|1⟩",
        status: "Qiskit Noise Simulation Engine Active",
        color: "text-violet-400",
      });
    } else if (mode === "cyber") {
      neuralGroup.visible = false;
      quantumGroup.visible = false;
      cyberGroup.visible = true;
      setTelemetry({
        title: "NetSage Threat Stream (IDS)",
        metric: "XGBoost Engine • 99.88% Accuracy",
        status: "2.8M+ Flow Anomaly Detection Active",
        color: "text-emerald-400",
      });
    }
  };

  // Robust Simulation Pulse for All 3 Modes
  const triggerSimulationPulse = () => {
    setIsSimulating(true);
    const { innerSphere, neuralMesh, arrowStateVector, cyberRing1, cyberRing2, particleCloud } = objectsRef.current;

    // Temporary speed boost
    objectsRef.current.pulseSpeed = 3.0;

    if (activeMode === "neural") {
      // Neural FNO Forward Pass Simulation
      if (innerSphere) {
        innerSphere.scale.set(1.5, 1.5, 1.5);
      }
      setTelemetry({
        title: "Forward Pass Computed (3D FNO)",
        metric: "Continuous Voxel Stress Field Evaluated in 0.042s",
        status: "R²: 0.9977 • Error: 4.75% • Status: CONVERGED",
        color: "text-cyan-400",
      });
    } else if (activeMode === "quantum") {
      // Quantum Noise & State Collapse Simulation
      if (arrowStateVector) {
        const theta = Math.random() * Math.PI;
        const phi = Math.random() * Math.PI * 2;
        const dir = new THREE.Vector3(
          Math.sin(theta) * Math.cos(phi),
          Math.cos(theta),
          Math.sin(theta) * Math.sin(phi)
        ).normalize();
        arrowStateVector.setDirection(dir);
      }
      const noiseTypes = ["Bit Flip (X)", "Phase Flip (Z)", "Depolarizing (0.02)", "Readout Error"];
      const selectedNoise = noiseTypes[Math.floor(Math.random() * noiseTypes.length)];
      setTelemetry({
        title: "1024 Shot Stochastic Run",
        metric: `Simulated Noise: ${selectedNoise} Channel`,
        status: "SyndromeAI XAI Logic Breakdown Completed",
        color: "text-violet-400",
      });
    } else if (activeMode === "cyber") {
      // IDS Threat Mitigation Scan
      if (cyberRing1 && cyberRing2) {
        cyberRing1.scale.set(1.3, 1.3, 1.3);
        cyberRing2.scale.set(1.3, 1.3, 1.3);
      }
      const attacks = ["PortScan", "DDoS-LOIC", "Brute Force SSH", "Botnet Infiltration", "SQL Injection"];
      const attack = attacks[Math.floor(Math.random() * attacks.length)];
      setTelemetry({
        title: "Intrusion Flow Intercepted",
        metric: `Signature: ${attack} (Confidence: 99.94%)`,
        status: "Threat Class Mitigated by NetSage XGBoost Engine",
        color: "text-emerald-400",
      });
    }

    setTimeout(() => {
      if (innerSphere) innerSphere.scale.set(1, 1, 1);
      if (cyberRing1 && cyberRing2) {
        cyberRing1.scale.set(1, 1, 1);
        cyberRing2.scale.set(1, 1, 1);
      }
      objectsRef.current.pulseSpeed = 1.0;
      setIsSimulating(false);
    }, 600);
  };

  // Toggle wireframe mode
  const toggleWireframe = () => {
    const { neuralMesh, innerSphere, cyberCore } = objectsRef.current;
    const nextState = !wireframeOnly;
    setWireframeOnly(nextState);
    if (neuralMesh) neuralMesh.material.wireframe = true;
    if (innerSphere) innerSphere.material.wireframe = nextState;
    if (cyberCore) cyberCore.material.wireframe = nextState;
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Canvas Viewport */}
      <div
        ref={mountRef}
        className="w-full h-[280px] sm:h-[320px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
      />

      {/* Interactive Controls & Telemetry HUD */}
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

        {/* Live Functional Telemetry Box & Simulation Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
          <div className="flex flex-col truncate pr-2">
            <span className={`${telemetry.color} font-bold truncate flex items-center gap-1.5`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              {telemetry.title}
            </span>
            <span className="text-slate-300 text-[10.5px] truncate font-medium mt-0.5">
              {telemetry.metric}
            </span>
            <span className="text-slate-500 text-[9.5px] truncate mt-0.5">
              {telemetry.status}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <button
              onClick={triggerSimulationPulse}
              disabled={isSimulating}
              className={`px-3 py-1.5 rounded-lg font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md ${
                isSimulating
                  ? "bg-cyan-500/50 text-slate-950 cursor-wait"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 hover:scale-105 shadow-cyan-500/20"
              }`}
            >
              <RefreshCw size={12} className={isSimulating ? "animate-spin" : ""} />
              {isSimulating ? "Computing..." : "Run Simulation"}
            </button>
            <button
              onClick={toggleWireframe}
              title="Toggle Wireframe"
              className={`p-1.5 rounded-lg border transition-colors ${
                wireframeOnly
                  ? "bg-cyan-500/20 border-cyan-500 text-cyan-300"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
              }`}
            >
              <Eye size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
