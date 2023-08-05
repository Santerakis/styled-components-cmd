import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle, ThemeProvider} from "styled-components";


// компанента импорта стилей
const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Consolas;
}`

const theme = {
    colors: {
        primary: 'blue',
        secondary: 'red'
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Global/>
          <App/>
      </ThemeProvider>
  </React.StrictMode>
);