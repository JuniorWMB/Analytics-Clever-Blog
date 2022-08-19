import { createContext, useState, useReducer, useEffect, useRef } from "react";
export const ContextStore = createContext();

export const Global = ({ children }) => {
  const [postModal, setPostModal] = useState([]);

  return (
    <ContextStore.Provider
      value={{
        postModal,
        setPostModal,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
