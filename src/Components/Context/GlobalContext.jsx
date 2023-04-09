import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  dentistas: [],
  dentista: {},
  isDark: false,
  favoritos: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, dentistas: action.payload };
    case "GET_USER":
      return { ...state, dentista: action.payload };
    case "HANDLE_FAVORITE":
      const isInFavorite = state.favoritos.some(
        (favoritos) => favoritos.id === action.payload.id
      );
      const newArr = state.favoritos.filter(
        (favoritos) => favoritos.id !== action.payload
      );

      return isInFavorite
        ? { ...state, favoritos: newArr }
        : { ...state, favoritos: [...state.favoritos, action.payload] };
    case "SWITCH_MODE":
      return { ...state, isDark: !state.isDark };
    default:
      state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
