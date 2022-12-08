import axios from 'axios';

export const getData = async () => {
  const { data } = await axios
    .get('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
    .then(({ data }) => data)
    .catch(error => console.error('Error: ' + error.message));
  return data;
};
