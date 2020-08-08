import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { ButtonMenu } from '../../../components/ButtonMenu';

import {
  Barcode,
  Bell,
  Briefcase,
  ChevronDown,
  Credit,
  CreditCard,
  Extract,
  GanttChart,
  Home,
  Password,
  Sim,
  Star,
  Transfer,
  WalletAlt,
} from '../../../utils/icons';

import {
  Container,
  Header,
  Avatar,
  StatusUser,
  WrapperDropDown,
  WrapperDropDownText,
  WrapperBalance,
  WrapperContent,
  WrapperBalanceText,
  WrapperBalanceValue,
  WrapperBalanceValueAndAction,
  WrapperBalanceAction,
  WrapperBalanceActionText,
  WrapperContentButtons,
  LinkHelp,
  LinkHelpText,
  WrapperBalanceNotValue,
} from './styles';

const Initial = () => {
  const [showValue, setShowValue] = useState(false);

  return (
    <Container>
      <Header>
        <Avatar>
          <StatusUser />
        </Avatar>

        <WrapperDropDown>
          <WrapperDropDownText>Conta poupança</WrapperDropDownText>

          <ChevronDown />
        </WrapperDropDown>

        <Bell />
      </Header>

      <WrapperBalance style={{ elevation: 2 }}>
        <WrapperBalanceText>Saldo em conta</WrapperBalanceText>
        <WrapperBalanceValueAndAction>
          {showValue ? (
            <WrapperBalanceValue>R$ 1.500,00</WrapperBalanceValue>
          ) : (
            <WrapperBalanceNotValue />
          )}

          <WrapperBalanceAction onPress={() => setShowValue(!showValue)}>
            <WrapperBalanceActionText>
              {showValue ? 'Esconder' : 'Mostrar'}
            </WrapperBalanceActionText>
          </WrapperBalanceAction>
        </WrapperBalanceValueAndAction>
      </WrapperBalance>

      <WrapperContent>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WrapperContentButtons>
            <ButtonMenu Icon={WalletAlt} text="Minha conta" />
            <ButtonMenu Icon={Barcode} text="Pagamentos" />
            <ButtonMenu Icon={Extract} text="Extrato" />
          </WrapperContentButtons>

          <WrapperContentButtons>
            <ButtonMenu Icon={CreditCard} text="Cartões" />
            <ButtonMenu Icon={Transfer} text="Transferências" />
            <ButtonMenu Icon={Home} text="Habitação" />
          </WrapperContentButtons>

          <WrapperContentButtons>
            <ButtonMenu Icon={Credit} text="Créditos" />
            <ButtonMenu Icon={GanttChart} text="Investimentos" />
            <ButtonMenu Icon={Star} text="Loterias" />
          </WrapperContentButtons>

          <WrapperContentButtons>
            <ButtonMenu Icon={Password} text="Seguros" />
            <ButtonMenu Icon={Briefcase} text="Portabilidade" />
            <ButtonMenu Icon={Sim} text="Recarga" />
          </WrapperContentButtons>

          <LinkHelp>
            <LinkHelpText>Solicitar ajuda</LinkHelpText>
          </LinkHelp>
        </ScrollView>
      </WrapperContent>
    </Container>
  );
};

export { Initial };
