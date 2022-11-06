import React, { createContext, useEffect, useState } from 'react'

const GameContext = createContext();

const GameProvider = ({children}) => {
    const[games, setGames] = useState([]);
    const[favorites, setFavorites] = useState([])
    

// Función para llamar a la API
const getGames = async () => {
    const res = await fetch(window.location.origin+"/juegos.json");
    const games = await res.json();
    setGames(games);
};

useEffect(() => {
    getGames();
}, []);

// Función para agregar publicación a avoritos
const addFavorites = ({id, name, img, price, desc}) => {
  const publicationIndex = favorites.findIndex((g) => g.id === id);
  const publication = {id, name, price, img, desc, count: 0};

  if(publicationIndex >= 0) {
    favorites[publicationIndex].count++;
    setFavorites([...favorites]);
  }
  else {
    setFavorites([...favorites, publication]);
  }
}












  return (
    <GameContext.Provider value={{games, addFavorites}}>
        {children}
    </GameContext.Provider>
  )
}

export {GameProvider};

export default GameContext;