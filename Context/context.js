import { createContext, useState, useReducer, useEffect, useRef } from "react";
export const ContextStore = createContext();

export const Global = ({ children }) => {
  const [postModal, setPostModal] = useState([]);
  const [skipPost, setskipPost] = useState(2);

  return (
    <ContextStore.Provider
      value={{
        postModal,
        setPostModal,
        skipPost,
        setskipPost,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
