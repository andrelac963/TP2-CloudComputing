import { api } from "../api";
import config from "../../../config.js"

export interface InputSongsType {
  songs: string[];
}

export interface RecommendedSongsResponseType {
  playlist_ids: number[];
  version: string;
  model_date: string;
}

// export async function getRecommendedSongs(body: InputSongsType) {
//   const response = await api.post("/recommend", body, {
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });
//   return response.data as RecommendedSongsResponseType;
// }

export async function getRecommendedSongs(body: InputSongsType) {
  const response = await api.post(`${config.RECOMMEND_ENDPOINT}`, body, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.data as RecommendedSongsResponseType;
}