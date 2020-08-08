import React from 'react';
import { SvgProps } from 'react-native-svg';

import { Container, Button, ButtonText } from './styles';

interface ButtonMenuProps {
  Icon: React.FC<SvgProps>;
  text: string;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ Icon, text }) => {
  return (
    <Container>
      <Button>
        <Icon />
      </Button>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export { ButtonMenu };
