import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: #1963ac;

  align-items: center;

  position: relative;

  padding-top: ${StatusBar.currentHeight && StatusBar.currentHeight}px;
`;

export const Header = styled.View`
  width: 311px;
  height: 32px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 44px;
`;

export const Avatar = styled.View`
  width: 32px;
  height: 32px;

  border-radius: 16px;
  background-color: #ccc;

  position: relative;
`;

export const StatusUser = styled.View`
  width: 8px;
  height: 8px;

  border-radius: 4px;
  background-color: #6ae40a;

  position: absolute;

  bottom: 2px;
  left: 0px;
`;

export const WrapperDropDown = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const WrapperDropDownText = styled.Text`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #fff;

  margin-right: 6px;
`;

export const WrapperBalance = styled.View`
  width: 311px;
  height: 124px;

  background-color: #f5f5f5;
  border-radius: 10px;

  margin-top: 32px;

  padding: 31px 24px;

  z-index: 2;
`;

export const WrapperBalanceText = styled.Text`
  font-size: 14px;
  line-height: 17px;

  color: #474747;
`;

export const WrapperBalanceValueAndAction = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 12px;
`;

export const WrapperBalanceValue = styled.Text`
  font-size: 24px;
  line-height: 29px;
  height: 29px;

  color: #1963ac;
`;

export const WrapperBalanceNotValue = styled.View`
  flex: 0.5;
  height: 29px;

  background-color: #ccc;
`;

export const WrapperBalanceAction = styled.TouchableOpacity``;

export const WrapperBalanceActionText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;

  color: #1963ab;
`;

export const WrapperContent = styled.View`
  flex: 1;
  width: 100%;

  background-color: #fff;

  align-items: center;

  margin-top: -62px;
  padding-top: 62px;
`;

export const WrapperContentButtons = styled.View`
  width: 317px;
  height: 84px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`;

export const LinkHelp = styled.TouchableOpacity`
  margin-top: 75px;
  margin-bottom: 20px;
  flex: 1;
  align-items: center;
`;

export const LinkHelpText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;

  color: #1963ab;
`;
