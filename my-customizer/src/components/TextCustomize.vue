<script setup>

import { ref, defineEmits } from 'vue';

const { canvasRef } = defineProps({
    canvasRef: Object
}); 

const textCustom = ref('');
const emit = defineEmits(['addTextToModel']);

function addText() {
    if (textCustom.value.trim() !== '') {
        console.log('text value emit??');
        emit('addTextToModel', textCustom.value.trim());
        textCustom.value = '';
    }
}

</script>

<template>
    <div class="fixed bottom-0 right-0 mb-2 flex flex-wrap items-center h-14 mr-5 z-20">
        <textarea v-model="textCustom" placeholder="Add your text......." class="h-12 w-56 border border-gray-500 rounded shadow-md mr-2"></textarea>
        <button @click="addText" class="h-12 w-24 border border-gray-400 rounded shadow-md bg-pink-400 text-white font-lato font-bold italic">Add Text</button>
    </div>
</template>