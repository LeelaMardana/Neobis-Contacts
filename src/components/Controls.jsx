import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Search } from './Search';
import { setFilter } from './../features/controls-slice';

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
  const dispatch = useDispatch();
  const handleFilter = value => dispatch(setFilter(value));

  return (
    <Wrapper>
      <Search />
      <FilterWrap>
        <Filter onClick={() => handleFilter('liked')}>
          <img src='./img/favorites-icon.svg' alt='liked' />
        </Filter>
        <Filter onClick={() => handleFilter('sortA-Z')}>
          <img src='./img/sortA.svg' alt='sortA-Z' />
        </Filter>
        <Filter onClick={() => handleFilter('sortZ-A')}>
          <img src='./img/sortZ.svg' alt='sortZ-A' />
        </Filter>
      </FilterWrap>
    </Wrapper>
  );
};
