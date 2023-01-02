import styled from 'styled-components';
import { Search } from './Search';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 47px 0 30px;
`;

export const Controls = () => {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
};
