"use client";

import { createContext, useContext, useState } from "react";
const FormulaContext = createContext();

export function FormulaProvider({ children }) {
  const [contextState, setContextState] = useState({ getFormula: [] });

  function getFormula(param) {
    setContextState({
      ...contextState,
      favoriteColors: contextState.favoriteColors.concat(newColor),
    });
  }

  const contextValues = { ...contextState, addColor };
  return (
    <CustomContext.Provider value={contextValue}>
      {children}
    </CustomContext.Provider>
  );
}
