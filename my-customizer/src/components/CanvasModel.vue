<!-- <template>

<canvas ref="canvasRef" class="w-full h-screen" />

</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three'; //Import de la librairie Threejs

onMounted(() => {

    //On crée la scene dans laquelle les éléments à afficher 
const scene = new THREE.Scene()

//On ajoute la caméra
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
camera.position.z = 5

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0xffffff});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Pour gérer le rendu graphique 3D
const renderer = new THREE.WebGLRenderer({canvas});
renderer.render(scene, camera);


})




</script> -->


