<script setup>
const { data: apod, pending, error } = await useFetch('/api/apod');
</script>

<template>
    <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load.</div>
    <div v-else class="container mx-auto p-4 max-w-2xl bg-white">
        <NuxtImg
        v-if="apod.hdImage || apod.image"
        :src="apod.hdImage ? apod.hdImage : apod.image"
        :sizes="'(max-width: 767px) 100vw, 1600px'"
        format="webp"
        quality="80"
        loading="lazy"
        :alt="apod.title"
        class="rounded-lg shadow-lg mb-4 max-h-[80vh] object-cover"
        />
      <h1 class="text-3xl font-bold underline mb-2" v-if="apod.title">{{ apod.title }}</h1>
      <p v-if="apod.description">{{ apod.description }}</p>
    </div>
  </div>
</template>