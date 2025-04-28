import { cachedEventHandler } from '#internal/nitro';

export default cachedEventHandler(
  async (event) => {
    const config = useRuntimeConfig();
    const nasaApiKey = config.NASA_API;
    const result = await $fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`);
    return {
      hdImage: result.hdurl,
      image: result.url,
      title: result.title,
      description: result.explanation,
    };
  },
  {
    maxAge: 60 * 60 * 12,
    getKey: (event) => event.path
  }
);
