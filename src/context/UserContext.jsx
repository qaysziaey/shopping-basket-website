import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // either null (not logged in) or
  // {userName:"xyz"}
  const [user, setUser] = useState(null);

  function login(userName) {
    setUser({ userName });
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
