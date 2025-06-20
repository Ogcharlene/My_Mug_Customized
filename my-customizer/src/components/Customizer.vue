<script setup>
    import Header from './Header.vue';
    import CanvasModel from './CanvasModel.vue';
    import ColorCustomize from './ColorCustomize.vue';
    import Footer from './Footer.vue';
    import { ref } from 'vue';

    //Création d'une ref pour accéder au model3D
    const canvasRef = ref(null);
</script>

<template>
    <Header />
    <CanvasModel ref="canvasRef"/>
    <!-- prop : -->
    <ColorCustomize :canvasRef="canvasRef" class="absolute mb-2 z-20" />
    <Footer />
</template>

