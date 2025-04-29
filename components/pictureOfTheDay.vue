<script setup>
const { data: apod, pending, error } = await useFetch('/api/apod');
</script>

<template>
  <div>
    <div v-if="pending" class="flex justify-center items-center p-10">
      <svg class="mr-3 -ml-1 size-8 animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
    </div>
    <div v-else-if="error">Failed to load.</div>
    <div v-else class="container mx-auto p-6 max-w-2xl bg-white">
        <NuxtImg
        v-if="apod.hdImage || apod.image"
        :src="apod.hdImage ? apod.hdImage : apod.image"
        :sizes="'(max-width: 767px) 100vw, 1600px'"
        format="webp"
        quality="80"
        loading="lazy"
        :alt="apod.title"
        class="rounded-lg shadow-lg mb-6 max-h-[80vh] object-cover mx-auto aspect-[16/9]"
        />
      <h1 class="text-xl md:text-3xl font-bold underline mb-2" v-if="apod.title">{{ apod.title }}</h1>
      <p v-if="apod.description" class="text-md md:text-lg">{{ apod.description }}</p>
    </div>
  </div>
</template>