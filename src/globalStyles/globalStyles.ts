import { createGlobalStyle } from 'styled-components';
import themeList from '../data/themeList';

const GlobalStyles = createGlobalStyle`

:root {
  --light: #ffffff;
  --dark: #050505;
  --textColorLight: #6c757d;
  --textColorDark: #e9ecef
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  background-color: ${(props) => props.theme === themeList.light ? 'var(--light)' : 'var(--dark)'};
  color: ${(props) => props.theme === themeList.light ? 'var(--textColorLight)' : 'var(--textColorDark)'};
}

li {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  color: #e5989b;
}

.container {
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  padding: 1.3rem 1rem;
}

`

export default GlobalStyles;