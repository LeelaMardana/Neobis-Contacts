import styled from 'styled-components';
import { Search } from './Search';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 47px 0 30px;
  align-items: center;
`;

const FilterWrap = styled.div`
  display: flex;
  gap: 16px;
`;

const Filter = styled.button`
  cursor: pointer;
  color: aliceblue;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const Controls = () => {
  return (
    <Wrapper>
      <Search />
      <FilterWrap>
        <Filter>
          <img src='./img/favorites-icon.svg' alt='12' />
        </Filter>
        <Filter>
          <img src='./img/sortA.svg' alt='12' />
        </Filter>
        <Filter>
          <img src='./img/sortZ.svg' alt='12' />
        </Filter>
      </FilterWrap>
    </Wrapper>
  );
};
