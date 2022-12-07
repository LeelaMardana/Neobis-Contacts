import React from 'react';
import { Home } from './pages/Home';
import { createGlobalStyle } from 'styled-components';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: inherit;
}

ul,
ol {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
