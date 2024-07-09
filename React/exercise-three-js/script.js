import * as Three from 'three';

const canvas = document.querySelector('.webgl');

// Create a scene 
const scene = new Three.Scene();

// Add Mesh
const geometry = new Three.BoxGeometry(1, 1, 1);
const material = new Three.MeshBasicMaterial({ color: 0xffffff });
const cube = new Three.Mesh(geometry, material);

// set position
cube.position.set( 0.7, 0.75, 1 );

// Rotate
cube.rotation.x = Math.PI / 2;

scene.add(cube);

// Sizes
const sizes ={
    width : 800,
    height : 600
}

// Camera
const camera = new Three.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

// renderer
const renderer = new Three.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0x000000, 1);

// Render
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();

// Animation
function animate() {
    // Change color
    material.color.set(Math.random(), Math.random(), Math.random());

    // Change position
    cube.position.x = Math.random() * 10 - 5;
    cube.position.y = Math.random() * 10 - 5;
    cube.position.z = Math.random() * 10 - 5;

    // Rotate
    cube.rotation.x = Math.random() * Math.PI;
    cube.rotation.y = Math.random() * Math.PI;
    cube.rotation.z = Math.random() * Math.PI;

    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();