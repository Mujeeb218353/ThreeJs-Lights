import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 10);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(3, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: "skyblue" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Ambient Light (same light intensity on all surfaces)
const ambientLight = new THREE.AmbientLight("white", 1);
// (color, intensity)
scene.add(ambientLight);


// Directional Light (light from a specific direction)
const directionalLight = new THREE.DirectionalLight("white", 2);
directionalLight.position.set(2, 2, 0);
// (x, y, z)
scene.add(directionalLight);

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, .5);
scene.add(directionalLightHelper);

// Point Light (light from a specific point)
const pointLight = new THREE.PointLight("white", 15, 1000, 1);
pointLight.position.set(-3, 1, .01);
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, .5);
scene.add(pointLightHelper);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

function animate() {
	renderer.render(scene, camera);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();
}
renderer.setAnimationLoop(animate);