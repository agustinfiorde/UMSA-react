import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { CharacterI, EpisodeI, LocationI } from "../types/rickAndMorty.type";
import {
  fetchCharacters,
  fetchEpisodes,
  fetchLocations,
} from "../services/example.service";

type RickAndMortyContextType = {
  characters: CharacterI[];
  locations: LocationI[];
  episodes: EpisodeI[];
  editData: ()=>void;
};

const RickAndMortyContext = createContext<RickAndMortyContextType | undefined>(
  undefined
);

interface RickAndMortyProviderProps {
  children: ReactNode;
}

export const RickAndMortyProvider: React.FC<RickAndMortyProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterI[]>([]);
  const [locations, setLocations] = useState<LocationI[]>([]);
  const [episodes, setEpisodes] = useState<EpisodeI[]>([]);

  useEffect(() => {
    try {
      fetchCharacters().then((data) => {
        setCharacters(data.results);
      });
      fetchLocations().then((data) => {
        setLocations(data.results);
      });
      fetchEpisodes().then((data) => {
        setEpisodes(data.results);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const editData = () => console.log("Holis soy edit Data");

  return (
    <RickAndMortyContext.Provider value={{ characters, locations, episodes, editData }}>
      {children}
    </RickAndMortyContext.Provider>
  );
};

export const useRickAndMorty = () => {
  const context = useContext(RickAndMortyContext);
  if (context === undefined) {
    throw new Error(
      "useRickAndMorty must be used within a RickAndMortyProvider"
    );
  }
  return context;
};

export default RickAndMortyContext;
