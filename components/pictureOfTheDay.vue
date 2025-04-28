<script setup>
const { data: apod, pending, error } = await useFetch('/api/apod');
</script>

<template>
    <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load.</div>
    <div v-else>
        <NuxtImg
        :src="apod.hdImage ? apod.hdImage : apod.image"
        :sizes="'(max-width: 767px) 100vw, 1600px'"
        format="webp"
        quality="80"
        loading="lazy"
        :alt="apod.title"
        />
      <h1>{{ apod.title }}</h1>
      <p>{{ apod.description }}</p>
    </div>
  </div>
</template>