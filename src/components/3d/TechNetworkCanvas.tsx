import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface NodeData {
  name: string;
  category: "backend" | "frontend" | "ai" | "db";
  color: number;
  size: number;
  position: [number, number, number];
}

const NODES: NodeData[] = [
  { name: "Java", category: "backend", color: 0xD4AF37, size: 1.8, position: [-3.2, 1.8, 0] },
  { name: "Spring Boot", category: "backend", color: 0xF59E0B, size: 1.6, position: [-1.8, 3.2, -1.2] },
  { name: "React", category: "frontend", color: 0xFDE047, size: 1.7, position: [2.5, 2.2, 0.8] },
  { name: "Next.js", category: "frontend", color: 0xE2E8F0, size: 1.5, position: [4.0, 0.8, -1] },
  { name: "Python", category: "ai", color: 0xD4AF37, size: 1.9, position: [0, -2.5, 1.5] },
  { name: "NLP / AI", category: "ai", color: 0xF5B738, size: 2.0, position: [2.8, -1.8, -0.5] },
  { name: "BART / T5", category: "ai", color: 0xFDE68A, size: 1.4, position: [1.2, -3.4, -1.8] },
  { name: "PostgreSQL", category: "db", color: 0xB8860B, size: 1.4, position: [-3.8, -1.2, 1] },
  { name: "MongoDB", category: "db", color: 0xD97706, size: 1.4, position: [-2.2, -2.8, -1.5] },
  { name: "Hibernate", category: "backend", color: 0xF6D062, size: 1.3, position: [-0.5, 2.0, 2] },
  { name: "TypeScript", category: "frontend", color: 0xE2E8F0, size: 1.4, position: [1.8, 0.4, -2.5] },
];

export const TechNetworkCanvas: React.FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check device / reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      1000
    );
    camera.position.z = isMobile ? 14 : 12;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // Group for nodes & lines
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Ambient & Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xD4AF37, 4.5, 50);
    goldLight.position.set(0, 5, 8);
    scene.add(goldLight);

    const amberLight = new THREE.PointLight(0xF59E0B, 3, 40);
    amberLight.position.set(-6, -4, 4);
    scene.add(amberLight);

    // Node Meshes
    const nodeMeshes: { mesh: THREE.Mesh; data: NodeData; initialPos: THREE.Vector3 }[] = [];
    const sphereGeo = new THREE.SphereGeometry(0.35, isMobile ? 16 : 32, isMobile ? 16 : 32);

    NODES.forEach((node) => {
      const mat = new THREE.MeshStandardMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: 0.65,
        roughness: 0.2,
        metalness: 0.8,
      });

      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.scale.setScalar(node.size * 0.7);
      mesh.position.set(...node.position);
      networkGroup.add(mesh);

      // Add a subtle outer glow shell
      if (!isMobile) {
        const glowGeo = new THREE.SphereGeometry(0.48, 16, 16);
        const glowMat = new THREE.MeshBasicMaterial({
          color: node.color,
          transparent: true,
          opacity: 0.18,
          wireframe: true,
        });
        const glowMesh = new THREE.Mesh(glowGeo, glowMat);
        mesh.add(glowMesh);
      }

      nodeMeshes.push({
        mesh,
        data: node,
        initialPos: new THREE.Vector3(...node.position)
      });
    });

    // Create Connecting Lines between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.35,
    });

    const linePoints: THREE.Vector3[] = [];
    for (let i = 0; i < NODES.length; i++) {
      for (let j = i + 1; j < NODES.length; j++) {
        const p1 = new THREE.Vector3(...NODES[i].position);
        const p2 = new THREE.Vector3(...NODES[j].position);
        if (p1.distanceTo(p2) < 5.8) {
          linePoints.push(p1, p2);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    networkGroup.add(lineSegments);

    // Background Particle Cloud (Golden Stardust)
    const particleCount = isMobile ? 60 : 160;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 24;
      particlePositions[i + 1] = (Math.random() - 0.5) * 18;
      particlePositions[i + 2] = (Math.random() - 0.5) * 15;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xFDE68A,
      size: isMobile ? 0.04 : 0.05,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      if (!prefersReducedMotion) {
        // Smooth mouse interpolation
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        networkGroup.rotation.y = elapsedTime * 0.08 + mouseX * 0.5;
        networkGroup.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1 - mouseY * 0.4;

        // Subtle float on node meshes
        nodeMeshes.forEach((item, idx) => {
          const offset = Math.sin(elapsedTime * 1.5 + idx) * 0.12;
          item.mesh.position.y = item.initialPos.y + offset;
        });

        particles.rotation.y = -elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / Math.max(container.clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", onMouseMove);
      }
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      lineGeometry.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};
