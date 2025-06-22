<script setup>
    import Header from './Header.vue';
    import CanvasModel from './CanvasModel.vue';
    import ColorCustomize from './ColorCustomize.vue';
    import TextCustomize from './TextCustomize.vue';
    import Footer from './Footer.vue';
    import { ref } from 'vue';
    import { Color } from 'three';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
    import * as THREE from 'three';

    //Création d'une ref pour accéder au model3D
    const canvasRef = ref(null);
    const model = ref(null);
    const font = ref(null);

    function set3DModel(loadedModel) {
        console.log('model received ??')
        model.value = loadedModel;
    }

    function selectColor(color) {
        if (model.value) {
            console.log('get model ??')
            model.value.traverse((child) => {
                if(child.isMesh) {
                    console.log('object is visible ??')
                    child.material.color.set(new Color(color));
                }
            });
        }
    }

    const fontLoader = new FontLoader();

    //Charger les fonts et les stocker dans la ref "font"
    fontLoader.load('fonts/helvetiker_regular.typeface.json', function (fontLoaded) {
        font.value = fontLoaded;
        console.log('font loaded', fontLoaded);
    });

    function addTextToModel(text) {

        if (!model.value) return;

        console.log('model or font not ready', model.value);

        //création canva
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 246;
        const context = canvas.getContext('2d');

        //mettre (dessiner) du texte sur le canva
        context.clearRect(0,0, canvas.width, canvas.height); //reinitialisation du canvas après un autre texte (pour eviter les doublons)
        context.fillStyle = 'black'; //init la couleur
        context.font = 'bold 47px Lato'; //style de font
        context.textAlign = 'center';
        context.fillText(text, canvas.width / 2, canvas.height / 2 + 16); //position du text dans le canva 

        //À mettre sur l'objet 3D (le text)
        const texture = new THREE.CanvasTexture(canvas);

        //Application de la texture
        const textMaterial = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true,
        });

        //surface 2D (plate)
        const textGeometry = new THREE.PlaneGeometry(2, 1);
        //obj 3D visible dans ma scène (mug + text)
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        textMesh.position.set(0, 0.1, 0.99); //position du texte
        textMesh.rotation.y = 0;

        console.log('add text to model is ok ??');

        model.value.add(textMesh);
    }


</script>

<template>
    <Header />
    <CanvasModel ref="canvasRef"
        @modelLoaded='set3DModel'/>
    <!-- prop : -->
    <ColorCustomize :canvasRef="canvasRef" class="absolute mb-2 z-20" 
        @selectColor='selectColor'/>
    <TextCustomize :canvasRef="canvasRef" class="absolute mb-2 z-20"
        @addTextToModel="(value) => { console.log('REÇU', value); addTextToModel(value); }"/>
    <Footer />
</template>

