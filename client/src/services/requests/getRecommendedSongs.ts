import { api } from "../api";
import config from "../../../config";

export interface InputSongsType {
  songs: string[];
}

export interface RecommendedSongsResponseType {
  playlist: string[];
  version: string;
  model_date: string;
}

export async function getRecommendedSongs(body: InputSongsType) {
  const response = await api.post(`${config.RECOMMEND_ENDPOINT}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data as RecommendedSongsResponseType;
}
