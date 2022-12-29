import axios from 'axios';

const BASE_URL =
  'https://my-json-server.typicode.com/RomanChasovitin/demo-api/users';

export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data.data;
};
