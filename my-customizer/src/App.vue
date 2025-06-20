<script setup>
import CanvasModel from './components/CanvasModel.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';

//ref au composant CanvasModel.vue pour accéder a mon objet 3D ailleurs
const canvasComponentRef = ref(null);
</script>

<template>
  <Header />
  <CanvasModel ref="canvasComponentRef"/>
  <!-- prop : -->
  <Footer  :canvasRef="canvasComponentRef"/>
 
</template>