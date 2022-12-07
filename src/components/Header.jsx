import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: black;
  height: 67px;
  display: flex;
  align-items: center;
  div {
    display: flex;
    gap: 9px;
    margin-left: 20px;
    a {
      display: flex;
      gap: 9px;

      span {
        font-size: 32px;
        line-height: 37px;
        display: block;
        color: white;
      }
    }
  }
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <Link to={'/'}>
          <img src='./img/Frame.svg' alt='logo' />
          <span>MyContacts</span>
        </Link>
      </div>
    </HeaderStyled>
  );
};
