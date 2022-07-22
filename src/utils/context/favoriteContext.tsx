import { createContext, useState } from "react";

interface FavoriteContextProps {
  favorites: number[];
  toggleFavorite?: (id: number) => void;
}

const defaultState = {
  favorites: [0],
};

const FavoriteContext = createContext<FavoriteContextProps>(defaultState);

const FavoriteProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState(defaultState.favorites);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      const filteredFavorites = favorites.filter((item) => item !== id);
      setFavorites(filteredFavorites);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };
