<script setup>

import { defineEmits } from 'vue';

const { canvasRef } = defineProps({
    canvasRef: Object
}); 

const emit = defineEmits(['selectColor']);

function colorCustomize(color) {
    console.log('emit is ok ??')
    emit('selectColor', color);       
}

</script>

<template>
    <div class="flex fixed bottom-0 h-16 ml-2">
        <button @click="colorCustomize('#000000')" class="bg-black w-16 border border-gray-400 rounded shadow-md"></button>
        <button @click="colorCustomize('#ef4444')" class="bg-red-500 w-16 border border-gray-400 rounded shadow-md"></button>
        <button @click="colorCustomize('#f97316')" class="bg-orange-500 w-16 border border-gray-400 rounded shadow-md"></button>
        <button @click="colorCustomize('#eab308')" class="bg-yellow-500 w-16 border border-gray-400 rounded shadow-md"></button>
        <button @click="colorCustomize('#22c55e')" class="bg-green-500 w-16 border border-gray-400 rounded shadow-md"></button>
        <button @click="colorCustomize('#10b981')" class="bg-emerald-500 w-16 border border-gray-400 rounded shadow-md"></button>
        <button @click="colorCustomize('#0ea5e9')" class="bg-sky-500 w-16 border border-gray-400 rounded shadow-md"></button>
        <button @click="colorCustomize('#8b5cf6')" class="bg-violet-500 w-16 border border-gray-400 rounded shadow-md"></button>
        <button @click="colorCustomize('#d946ef')" class="bg-fuchsia-500 w-16 border border-gray-400 rounded shadow-md"></button>
        <button @click="colorCustomize('#6b7280')" class="bg-gray-500 w-16 border border-gray-400 rounded shadow-md"></button>
    </div>
</template>

