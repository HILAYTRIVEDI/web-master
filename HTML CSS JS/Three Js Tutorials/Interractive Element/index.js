import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

// Create a scene
const scene = new THREE.Scene();

const sizes = {
    w: window.innerWidth,
    h: window.innerHeight
}


// Create a renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(sizes.w, sizes.h);
document.body.appendChild(renderer.domElement);

// Create a camera
const camera = new THREE.PerspectiveCamera(
    75, sizes.w / sizes.h, 1, 100
);
camera.position.set(0, 0, 3);
scene.add(camera);

// Create a geometry
const geometry = new THREE.IcosahedronGeometry(1, 2);

// Create a material
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
});

// Create a mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const wireframe = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.5
});

const wireFrameMesh = new THREE.Mesh(geometry, wireframe);
mesh.add(wireFrameMesh);

const light = new THREE.HemisphereLight(0x7fff00, 0x000000, 1);
scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();