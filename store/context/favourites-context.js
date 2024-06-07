import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

export default function FavouritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourite(id) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const Value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  <FavouritesContext.Provider value={Value}>
    {children}
  </FavouritesContext.Provider>;
}
