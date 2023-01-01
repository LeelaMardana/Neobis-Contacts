import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { likeContact } from '../features/contacts-slice';

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 3px rgba(33, 33, 33, 0.25);
  background: #ffffff;
  border-radius: 4px;
`;
const ImgStyled = styled.div`
  height: 135px;
  overflow: hidden;
  img {
    border-radius: 4px 4px 0px 0px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 9px 11px 8px;
  gap: 11px;
`;
const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: Ubuntu;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    margin: 0;
  }
  a {
    display: contents;
  }
`;
const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  div {
    display: flex;
    gap: 5px;
    h3 {
      font-family: Ubuntu;
      font-size: 13px;
      font-weight: 400;
      line-height: 15px;
      text-align: left;
      margin: 0;
    }
  }
`;
const BtnStyled = styled.button`
  cursor: pointer;
  color: #fff;
  width: 95px;
  height: 21px;
  background: #212121;
  border-radius: 2px;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 5px;
  align-self: end;
`;

const Like = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  color: ${props => props.color};
  cursor: pointer;
`;

export const Card = ({
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
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <CardStyled>
      <ImgStyled>
        <img src={image} alt='avavar' />
      </ImgStyled>

      <ContentStyled>
        <TitleStyled>
          <h1>
            {firstName} {lastName}
          </h1>
          <Like
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
              width='20'
              height='20'
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
          </Like>
        </TitleStyled>

        <InfoStyled>
          <div>
            <img src='./img/location.svg' alt='location' />
            <h3>
              {city}, {country}
            </h3>
          </div>

          <div>
            <img src='./img/smartphone.svg' alt='phone' />
            <h3>{phoneNumber}</h3>
          </div>

          <div>
            <img src='./img/internet.svg' alt='website' />
            <h3>{website}</h3>
          </div>

          <div>
            <img src='./img/email.svg' alt='email' />
            <h3>{email}</h3>
          </div>
        </InfoStyled>

        <BtnStyled
          onClick={() => {
            navigate(`/contacts/${id}`);
          }}
        >
          show
        </BtnStyled>
      </ContentStyled>
    </CardStyled>
  );
};
