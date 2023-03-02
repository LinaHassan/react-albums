import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(undefined);
 
  const value = {
    currentUser,
    setCurrentUser,
  };

return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};