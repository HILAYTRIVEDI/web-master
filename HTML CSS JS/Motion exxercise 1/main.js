import * as THREE from "three";

// Add Scene
const scene = new THREE.Scene();

// Add sphere to the scene with 64 segments
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Add camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;
scene.add(camera);


// Add light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(1, 1, 0);
scene.add(light);

// Render
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera);