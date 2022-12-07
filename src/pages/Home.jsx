import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../components/Card';
// import { useDispatch } from 'react-redux';

const contacts = [
  {
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
  },
  {
    id: 2,
    firstName: 'Ivan',
    lastName: 'Baryshev',
    city: 'Moscow',
    country: 'Russia',
    phoneNumber: '+720412312332',
    email: 'van.bar@gomail.com',
    website: 'ivan.github.com',
    image:
      'https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 3,
    firstName: 'Petr',
    lastName: 'Piolek',
    city: 'Paris',
    country: 'France',
    phoneNumber: '+21232200483',
    email: 'piolek.f@gomail.com',
    website: 'linkedin.com/piolek',
    image:
      'https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 4,
    firstName: 'Eugene',
    lastName: 'Forige',
    city: 'London',
    country: 'England',
    phoneNumber: '+932550221',
    email: 'eng.eugine@gomail.com',
    website: 'eugine.com',
    image:
      'https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 5,
    firstName: 'Florian',
    lastName: 'Veretout',
    city: 'Rome',
    country: 'Italy',
    phoneNumber: '+252532292',
    email: 'florian.v@gomail.com',
    website: 'florianVeret.it',
    image:
      'https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 6,
    firstName: 'Lara',
    lastName: 'Dorren',
    city: 'Barcelona',
    country: 'Spain',
    phoneNumber: '+6212355202',
    email: 'dorren.l@gomail.com',
    website: 'dorren.es',
    image:
      'https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 7,
    firstName: 'Ciri',
    lastName: 'Falka',
    city: 'Milan',
    country: 'Italy',
    phoneNumber: '+7212312123',
    email: 'falka.vedm@gomail.com',
    website: 'falka.com',
    image:
      'https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 8,
    firstName: 'Johny',
    lastName: 'Ellander',
    city: 'Los-Angeles',
    country: 'USA',
    phoneNumber: '+122325553',
    email: 'la.jonhy@gomail.com',
    website: 'jonhy.la.com',
    image:
      'https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
];

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

export const Home = () => {
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
