import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { likeContact } from '../features/contacts-slice';

const LikeStyled = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.color};
  width: ${props => props.size};
  height: ${props => props.size};
`;

export const Like = ({
  id,
  city,
  country,
  email,
  firstName,
  image,
  lastName,
  phoneNumber,
  website,
  isLiked,
  size,
}) => {
  const dispatch = useDispatch();
  return (
    <LikeStyled
      size={size}
      color={!isLiked ? 'transparent' : 'red'}
      onClick={() => {
        isLiked = !isLiked;

        dispatch(
          likeContact({
            id,
            city,
            country,
            email,
            firstName,
            image,
            lastName,
            phoneNumber,
            website,
            isLiked,
          })
        );
      }}
    >
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 24 24'
        fill='currentColor'
        stroke='black'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        data-darkreader-inline-stroke=''
      >
        <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
      </svg>
    </LikeStyled>
  );
};
