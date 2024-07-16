import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

// Create a scene
const scene = new THREE.Scene()

const sizes = { w: window.innerWidth, h: window.innerHeight }
const loader = new THREE.TextureLoader()

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(sizes.w, sizes.h)
document.body.appendChild(renderer.domElement)

// Create a camera
const camera = new THREE.PerspectiveCamera(75, sizes.w / sizes.h, 1, 100)
camera.position.set(0, 0, 3)
scene.add(camera)

// Create a earth Geometry
const geometry = new THREE.SphereGeometry(1, 64, 64)
const material = new THREE.MeshStandardMaterial({ 
    map: loader.load('./earthmap1k.jpg'),
})

// Create a earth Mesh
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Create a light
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(1, 1, 0)
scene.add(light)

// Create a orbit controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.25


function animate() {
    requestAnimationFrame(animate)
    controls.update()

    // Rotate the earth slowly
    mesh.rotation.y += 0.002

    renderer.render(scene, camera)
}

animate()