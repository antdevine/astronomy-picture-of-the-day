<script setup>
const { data: apod, pending, error } = await useFetch('/api/apod');
</script>

<template>
    <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load.</div>
    <div v-else>
        <NuxtImg
        v-if="apod.hdImage || apod.image"
        :src="apod.hdImage ? apod.hdImage : apod.image"
        :sizes="'(max-width: 767px) 100vw, 1600px'"
        format="webp"
        quality="80"
        loading="lazy"
        :alt="apod.title"
        />
      <h1 v-if="apod.title">{{ apod.title }}</h1>
      <p v-if="apod.description">{{ apod.description }}</p>
    </div>
  </div>
</template>