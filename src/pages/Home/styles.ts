import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f5;
  padding: 24px;
  gap: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1d4ed8;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #1d4ed8;
  padding: 16px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
