import React from "react";
export const UIAppStateContext = React.createContext(null);
export const useUIAppState = () => React.useContext(UIAppStateContext);
