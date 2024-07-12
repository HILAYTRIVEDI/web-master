import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);

// Add metallic material to the sphere
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00
});

// Mesh the sphere
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Create an aspect ratio constant
const sizes = {
  width: 800,
  height: 600
}

// Add lights
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Create a camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 1000);
camera.position.z = 20;
camera.lookAt(sphere.position); // Ensure camera looks at the sphere
scene.add(camera);

// Create a renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });

// Set the size of the renderer
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio); // Ensure proper resolution

// Animation loop
const animate = () =>
{
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate(); 
