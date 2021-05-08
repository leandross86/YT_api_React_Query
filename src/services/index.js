import axios from 'axios';

const KEY = process.env.REACT_APP_HOST_API_KEY;

export const apiPlaylist = async (key, pageToken) => {
  const { data } = await axios.get(
    'https://www.googleapis.com/youtube/v3/playlistItems',
    {
      params: {
        part: 'snippet',
        playlistId: 'PL85ITvJ7FLoivA_1YoBrRJbNWajIoR7Os',
        key: KEY,
        maxResults: 6,
        pageToken: pageToken
      }
    }
  )
  return data;
};