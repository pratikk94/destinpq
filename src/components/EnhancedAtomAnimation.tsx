import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EnhancedAtomAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create nucleus or central star
    const nucleusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const nucleusMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // Create orbiting electrons or stars
    const electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const electronMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    const electrons: THREE.Mesh[] = [];

    for (let i = 0; i < 5; i++) {
      const electron = new THREE.Mesh(electronGeometry, electronMaterial);
      scene.add(electron);
      electrons.push(electron);
    }

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate electrons around the nucleus
      electrons.forEach((electron, index) => {
        const angle = Date.now() * 0.001 + index;
        electron.position.x = Math.cos(angle) * 2;
        electron.position.y = Math.sin(angle) * 2;
        electron.position.z = Math.sin(angle) * 2;
      });

      // Rotate the entire scene for a dynamic effect
      scene.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default EnhancedAtomAnimation;
