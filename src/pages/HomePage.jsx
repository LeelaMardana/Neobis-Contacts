import styled from 'styled-components';
import { Card } from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import {
  loadCountacts,
  selectAllContacts,
  selectCountactsStatus,
} from '../features/contacts-slice';

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
  const dispatch = useDispatch();
  const contacts = useSelector(state => selectAllContacts(state));
  const { status, error, qty } = useSelector(selectCountactsStatus);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountacts());
    }
  }, [qty, dispatch]);

  return (
    <SectionStyled>
      <WrapperStyled>
        {error && <h2>Can't fetch data</h2>}
        {status === 'loading' && <h2>Loading...</h2>}
        {status === 'received' &&
          contacts.map(item => <Card key={item.id} {...item} />)}
      </WrapperStyled>
    </SectionStyled>
  );
};
