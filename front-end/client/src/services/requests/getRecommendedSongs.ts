// import { api } from "../api";
import axios from 'axios'
export interface InputSongsType {
  songs: string[];
}

export interface RecommendedSongsResponseType {
  playlist_ids: number[];
  version: string;
  model_date: string;
}

export async function getRecommendedSongs(body: InputSongsType) {
  const response = await axios.post("/recommend", body, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.data as RecommendedSongsResponseType;
}
