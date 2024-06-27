import React, { createContext, useState, useContext } from "react";

type RickAndMortyContextType = {
  id: number;
  name: string;
};

const RickAndMortyContext = createContext<RickAndMortyContextType | undefined>(
  undefined
);

export const RickAndMortyProvider: React.FC = ({ children }) => {
  const [characters, setCharacters] = useState<any[]>([]);

  const fetchUser = () => {
    const fetchedUser: User = {
      id: 1,
      name: "John Doe",
    };
    setUser(fetchedUser);
  };

  useState(() => {
    fetchUser();
  }, []);

  return (
    <RickAndMortyContext.Provider value={user}>
      {children}
    </RickAndMortyContext.Provider>
  );
};

// Función custom hook para consumir el contexto
export const useRickAndMorty = () => {
  const context = useContext(RickAndMortyContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default RickAndMortyContext;
