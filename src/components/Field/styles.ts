import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #a1a1aa;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background-color: #fafafa;
  border: 1px solid #d1d1d6;
  color: #18181b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
`;
