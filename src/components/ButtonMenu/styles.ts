import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 60px;
  height: 60px;

  background-color: #f3f3f3;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #000;

  margin-top: 8px;
`;
