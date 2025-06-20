<template>
    <footer class="fixed bottom-0 flex items-center w-screen h-20 bg-gradient-to-r from-white via-purple-200 to-pink-200 text-gray-700 shadow-md">
        <!-- Prop -> canvasRef & ref -> canvasComponentRef (CanvasModel.vue) -->
        <ColorCustomize :canvasRef="canvasRef"/>
    </footer>
</template>

<script setup>
    defineProps(['canvasRef'])

    import ColorCustomize from './ColorCustomize.vue';
</script>