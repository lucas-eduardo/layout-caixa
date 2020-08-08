import styled, { css } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface HeaderTextProp {
  isBold?: boolean;
}

interface TapTextProp {
  isActive?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: #1963ac;

  align-items: center;

  position: relative;

  padding-top: ${StatusBar.currentHeight && StatusBar.currentHeight}px;
`;

export const Header = styled.View`
  width: 117px;

  flex-direction: row;
  align-items: center;

  margin-top: 32px;
  margin-bottom: 24px;
`;

export const HeaderText = styled.Text<HeaderTextProp>`
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;

  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: bold;
    `}

  color: #fff;
`;

export const WrapperLogo = styled.View`
  width: 185px;
  height: 43px;

  align-items: center;
  justify-content: center;
`;

export const WrapperForm = styled.View`
  position: absolute;

  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  width: 100%;
  height: 549px;

  align-items: center;

  padding: 31px 32px;

  bottom: 0;
`;

export const WrapperTab = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 311px;
  height: 50px;

  margin-top: 66px;
`;

export const Tap = styled(RectButton)`
  width: 150px;
  height: 50px;

  background-color: #f9f9f9;
  border-radius: 30px;

  align-items: center;
  justify-content: center;
`;

export const TapText = styled.Text<TapTextProp>`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  color: ${({ isActive }) => (isActive ? '#1963AC' : '#919191')};
`;

export const WrapperInput = styled.View`
  position: relative;

  flex-direction: row;
  align-items: center;

  width: 311px;
  height: 60px;

  border: 1px rgba(0, 0, 0, 0.93);
  border-radius: 5px;

  padding: 0 16px;
`;

export const WrapperInputText = styled.Text`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #1f1f1f;
  background-color: #fff;

  position: absolute;
  top: -8px;
  left: 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
`;

export const WrapperInterrogation = styled.View`
  width: 25px;
  height: 25px;

  border: 2px #f6822a;

  border-radius: 12.5px;

  margin-left: 10px;

  align-items: center;
  justify-content: center;
`;

export const WrapperInterrogationText = styled.Text`
  font-weight: 600;
  font-size: 18px;

  color: #f6822a;
`;

export const Button = styled(RectButton)`
  width: 311px;
  height: 48px;

  align-items: center;
  justify-content: center;

  background-color: #1963ac;
  border-radius: 5px;

  margin-top: 32px;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;

  color: #fff;
`;

export const WrapperSwitch = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 24px;
`;

export const WrapperSwitchText = styled.Text`
  font-size: 12px;
  line-height: 16px;

  color: #909090;
`;

export const WrapperLink = styled.TouchableOpacity`
  height: 16px;
`;

export const WrapperLinkText = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  text-transform: uppercase;

  color: #1963ac;
`;
