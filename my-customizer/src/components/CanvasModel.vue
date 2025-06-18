<template>

<canvas ref="canvasRef" class="w-full h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-blue-400" />

</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three'; //Import de la librairie Threejs
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvasRef = ref(null);

let model3D = null;

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

onMounted(() => {
    //On crée la scene dans laquelle les éléments à afficher 
    const scene = new THREE.Scene()

    //On ajoute la caméra -> vue utilisateur 
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    camera.position.z = 5

    //Pour gérer le rendu graphique 3D -> moteur de rendu
    const renderer = new THREE.WebGLRenderer({canvas: canvasRef.value, alpha: true});
    //canva en plein écran 
    renderer.setSize(sizes.width, sizes.height)

    //canvas resize -> Responsive :
    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        //Adapte le canva par rapport à la taille de l'écran
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix(); // car camera.aspect -> pour appliquer la nouvelle "projection"

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //netteté du rendu???
    })

    //Ajout des lumière sur l'objet 3D:
    const light = new THREE.DirectionalLight( 0xffffff, 2); //couleur & intensité
    light.position.set(5, 5, 5);
    scene.add( light );

    const ambientLight = new THREE.AmbientLight (0xffffff, 1.5);
    scene.add( ambientLight);

    //Chargement du model 3D:
    const loader = new GLTFLoader();
    loader.load('/mug.glb', (gltf) => {
        model3D = gltf.scene;

        model3D.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
            }
        });
        scene.add(model3D);
    }, undefined,  (err) => {
        console.error(err);
    }
);

    //Gestion déplacement caméra au clique glissé de la souris:
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true; //false par defaut 
    controls.dampingFactor = 0.5; // Depend de enableDamping = true

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update(); // car enableDamping = true
        renderer.render(scene, camera); 
    }

    animate(); //appel de la fonction

})

</script>

