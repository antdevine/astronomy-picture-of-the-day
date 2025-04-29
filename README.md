```bash
# To run the application you will need to create an .env file in the project root, that contains the NASA key.
NASA_API=YOUR_KEY_HERE

# To run the app use the command
npm run dev

# You will then be able to access it via:
http://localhost:3000/

# For the Nitro routing and caching I used cachedEventHandler.   I was going to use defineEventHandler, but after looking into it this does not have maxAge on it and I would of had to use useStorage and check the cache key, so I felt it was more code than needed.  I then was going to use defineEventHandler with defineCachedFunction so I had access to the maxAge, I then found that cachedEventHandler was a simpler way of writing the function, possibly not as flexible but for our usecase seemed the best option.

# I used a env file as the NASA site says dont share the api key and I feel that it is best practice to not make these publicly available in a codebase.  The useRuntimeConfig is there to get the key from the env file.

# In the API request I just return the data that is needed in the page.

# The getKey in the apod is a unique cachekey, so the response can be linked to that.

# For the image I have used NuxtImg to render the iamge at the correct sizes for the breakpoints and then used tailwind to add this in a card style along with the title and description and the image works with apect raitos.  The image has a fallback so if the hd image doesnt exist then the normal image is used.

# I have added in a loading spinner for when the request is pending and outputted some error text if the request fails.

# The whole code is in a component called pictureOfTheDay.vue I could of just left all of the code in the index page but wanted to demonstate creating a component, it is not a great example of component building but all I could do in the time.  If I had more time I would of used a nicer font and added some hoverover flare.

# I did not do the video output as each time I tried pulling down the picture request it never gave me anything in the json for a video so I had no idea what the data would look like for creating a video, so kept it simple in the time frame and just did an image.  If I had access to a video one I would of left all of the code in the main index page and created 2 components 1 for an image and one for a video and then displayed one or the other depending on what data was returned.

# I did not have time todo the Bonus options for last time fetched and theme switcher, but I did handle the image resolutions and used the image fallback.
``` 
