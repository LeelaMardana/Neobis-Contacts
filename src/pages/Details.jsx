import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CustomForm } from '../components/Form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectContacts } from '../features/contacts-slice';
import { Like } from '../components/Like';

const SectionStyled = styled.section`
  padding: 50px 0 100px;
`;

const ContactStyled = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 41px;
  align-items: center;
  gap: 26px;
  img {
    height: 200px;
    border-radius: 4px;
  }
  div {
    height: 70px;
    width: 70px;
  }
`;

export const Details = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const { list, error, status } = useSelector(selectContacts);
  const { id } = useParams();

  const data = list.filter(item => item.id === +id)[0];

  return (
    <SectionStyled>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <>
          <ContactStyled>
            <img src={data.image} alt='avatar' />
            <Like {...data} size={'100px'} />
          </ContactStyled>
          <CustomForm {...data} />
        </>
      )}
    </SectionStyled>
  );
};
