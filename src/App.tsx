import { useState } from 'react';
import GlobalStyles from './globalStyles/globalStyles';
import LandingPage from './pages/LandingPage';
import themeList from './data/themeList';
import ThemeContext from './context/themeContext';
import "./assets/icon/iconfont.css";

export default function App() {

  const [theme, settheme] = useState(
    localStorage.getItem('mode') || themeList.light
  );
  localStorage.setItem('mode', theme);
  const toggleTheme = () => {
    settheme(theme === themeList.dark ? themeList.light : themeList.dark)
  }
  const themeColor = localStorage.getItem('mode')!;
  return (
    <>
      <ThemeContext.Provider value={{ theme: themeColor, toggleTheme }}>
        <GlobalStyles theme={themeColor} />
        <LandingPage />
      </ThemeContext.Provider>
    </>
  );
}
