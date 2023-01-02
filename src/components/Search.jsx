import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSearch, setSearch } from '../features/controls-slice';

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'type to search...',
})`
  height: 40px;
  background-color: transparent;
  border: 1px solid #21212159;
  border-radius: 2px;
  outline: none;
  padding: 0 16px;
  font-family: 'Ubuntu';
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  width: 519px;
  color: black;
`;

export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = e => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <label>
      <Input onChange={handleSearch} value={search} />
    </label>
  );
};
