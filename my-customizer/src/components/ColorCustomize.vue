<template>
    <div class="flex h-16 ml-2">
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

<script setup>

import { ref, watch } from 'vue';

const { canvasRef } = defineProps({
    canvasRef: Object
}); 

const model3D = ref(null);

// watch((onInvalidate) => {
//     const model = canvasRef?.value?.getModel3D?.();
//     if (model && !model3D.value) {
//         model3D.value = model;
//         console.log("3D model is ready")
//     }
// });

watch(
    () => canvasRef?.value?.getModel3D?.(),
    (model) => {
        if (model) {
            model3D.value = model;
            console.log('model3D is ready')
        }
    },
    { immediate: true }
)

function colorCustomize(color) {
    // const model3D = canvasRef.value?.getModel3D?.();
    if(!model3D.value) {
        console.warn('3D Model is not ready');
        return;
            
    } 
    model3D.value.traverse((child) => {
        if (child.isMesh) {
            child.material.color.set(color);
        }
    });        
}

</script>