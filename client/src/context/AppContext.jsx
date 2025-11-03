import React, { createContext, useEffect } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { getToken, isLoaded: authLoaded } = useAuth();
  const { user, isLoaded: userLoaded } = useUser();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getToken();
        console.log("🔑 Clerk Token:", token);
      } catch (err) {
        console.error("❌ Error fetching token:", err);
      }
    };

    if (authLoaded && userLoaded && user) {
      fetchToken();
    }
  }, [authLoaded, userLoaded, user]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
