import styled from 'styled-components';
import { Card } from '../components/Card';
// import { useDispatch } from 'react-redux';

import React, { useEffect, useState } from 'react';
import { getData } from '../api';

const SectionStyled = styled.section`
  padding: 50px 0 100px;
`;

const WrapperStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  justify-content: space-between;
  row-gap: 41px;
`;

export const HomePage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getData().then(data => {
      setContacts(data);
    });
  }, []);

  return (
    <SectionStyled>
      <WrapperStyled>
        {contacts.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </WrapperStyled>
    </SectionStyled>
  );
};
