import dotenv from 'dotenv'
dotenv.config()

export const getVideos = async () => {

  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&key=${import.meta.env.VITE_API_KEY_YOUTUBE}&maxResults=200&regionCode=es`);

    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 404) {
      console.log("404");
    } else {
      console.log("500");
    }
  } catch (error) {
    console.log(error);
  }

}