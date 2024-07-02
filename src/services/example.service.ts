import { instance } from "./axios.instance";

export const fetchCharacters = async () => {
  try {
    const response = await instance.get(`/character`);
    return response.data;
  } catch (error) {
    console.error("Error fetching character data:", error);
    throw error;
  }
};

export const fetchEpisodes = async () => {
  try {
    const response = await instance.get(`/episode`);
    return response.data;
  } catch (error) {
    console.error("Error fetching character data:", error);
    throw error;
  }
};

export const fetchLocations = async () => {
  try {
    const response = await instance.get(`/location`);
    return response.data;
  } catch (error) {
    console.error("Error fetching character data:", error);
    throw error;
  }
};
