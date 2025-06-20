<script setup>
    import Header from './Header.vue';
    import CanvasModel from './CanvasModel.vue';
    import ColorCustomize from './ColorCustomize.vue';
    import Footer from './Footer.vue';
    import { ref } from 'vue';
    import { Color } from 'three';

    //Création d'une ref pour accéder au model3D
    const canvasRef = ref(null);
    const model = ref(null);

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
</script>

<template>
    <Header />
    <CanvasModel ref="canvasRef"
        @modelLoaded='set3DModel'/>
    <!-- prop : -->
    <ColorCustomize :canvasRef="canvasRef" class="absolute mb-2 z-20" 
        @selectColor='selectColor'/>
    <Footer />
</template>

