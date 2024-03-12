import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { mmkv } from "../Storage/Storage";

interface AppContextProps {
  children: ReactNode;
}

type Theme = "light" | "dark";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const ThemeProvider: React.FC<AppContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = () => {
    const storedTheme = mmkv.getString("themeMode") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  };

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    mmkv.set("themeMode", newTheme);
    setTheme(newTheme);
  };

  const contextValue: AppContextType = {
    theme,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an ThemeProvider");
  }
  return context;
};
