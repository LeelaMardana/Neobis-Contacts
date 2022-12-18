import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';

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
body{
  font-family: Ubuntu;
}
`;

const Main = styled.main`
  max-width: 1155px;
  margin: 0 auto;
  padding: 0 10px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/contacts/:id' element={<Details />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;
