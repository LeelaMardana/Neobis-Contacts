// import Form from '../../components/Form';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CustomForm } from './../components/Form';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';

const data = {
  id: 1,
  firstName: 'Vanessa',
  lastName: 'Fahrmann',
  city: 'Bishkek',
  country: 'Kyrgyzstan',
  phoneNumber: '+99621509322',
  email: 'vanessa.f@gomail.com',
  website: 'vanessa.fm',
  image:
    'https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
};

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

export const Contact = () => {
  return (
    <SectionStyled>
      <ContactStyled>
        <img src={data.image} alt='avatar' />
        <div>
          <svg
            width='70'
            height='66'
            viewBox='0 0 70 66'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M35 65.2L30.1 60.3C11.9 44.2 0 33.35 0 20.05C0 9.19996 8.4 0.799957 19.25 0.799957C25.2 0.799957 31.15 3.59996 35 8.14996C38.85 3.59996 44.8 0.799957 50.75 0.799957C61.6 0.799957 70 9.19996 70 20.05C70 33.35 58.1 44.2 39.9 60.3L35 65.2Z'
              fill='#D32F2F'
            />
          </svg>
        </div>
      </ContactStyled>
      <CustomForm {...data} />
    </SectionStyled>
  );
};
