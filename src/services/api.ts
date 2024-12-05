import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export const getAddressByCep = async (cep: string) => {
  const response = await api.get(`${cep}/json/`);
  console.log(response.data);
  return response.data;
};
