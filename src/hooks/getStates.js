
import { createContext, useContext, useState } from "react";


const StatesContext = createContext({});

export function StatesProvider({ children }) {
    const [state, setState] = useState("");
    function changeState(item) {
        setState(item);
      }
      function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
      const contextValue = { state, changeState, capitalizeFirstLetter };
    return <StatesContext.Provider value={contextValue}>{children}</StatesContext.Provider>;
}
export default function getStates() {
    const context = useContext(StatesContext);
    return context;
}