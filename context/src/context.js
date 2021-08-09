import React from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => (
  <UserContext.Provider value={{ name: "Jun" }}>
    {children}
  </UserContext.Provider>
);

export default UserContextProvider;
