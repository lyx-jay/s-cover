import { createContext } from "react";
import themeList from "../data/themeList";

type ContextType = {
  theme: String;
  toggleTheme?: () => void;
}

const defaultContext: ContextType = {
  theme: themeList.light,
  toggleTheme: function() {}
}

const ThemeContext = createContext(defaultContext);

export default ThemeContext;