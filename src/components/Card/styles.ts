import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #fafafa;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #d1d1d6;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const Cep = styled.Text`
  font-size: 20px;
  color: #18181b;
  font-weight: bold;
`;

export const Logradouro = styled.Text`
  font-size: 16px;
  color: #a1a1aa;
  font-weight: 600;
`;

export const Bairro = styled.Text`
  font-size: 16px;
  color: #a1a1aa;
  font-weight: 600;
`;

export const Cidade = styled.Text`
  font-size: 16px;
  color: #a1a1aa;
  font-weight: 600;
`;

export const Estado = styled.Text`
  font-size: 16px;
  color: #a1a1aa;
  font-weight: 600;
`;
