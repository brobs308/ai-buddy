import React, { createContext, useContext, useEffect } from "react";

interface AuthContextData {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUid?: (uid: string) => void;
  userId: string;
}

const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  setIsLoggedIn: () => undefined,
  setUid: () => undefined,
  userId: "",
} as AuthContextData);

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    !!localStorage.getItem("userId")
  );

  const [userId, setUserId] = React.useState("");

  const setUid = (uid: string) => {
    localStorage.setItem("userId", uid);
    setUserId(uid);
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("userId"));
    setUserId(localStorage.getItem("userId") || "");
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, setUid, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContext, AuthProvider, useAuthContext };
