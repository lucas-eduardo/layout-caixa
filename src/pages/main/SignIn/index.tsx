import React, { useRef, useState, useCallback } from 'react';
import {
  Switch,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CaixaLogo, Shape } from '../../../utils/icons';

import {
  Container,
  WrapperForm,
  WrapperInput,
  WrapperInputText,
  Input,
  WrapperInterrogation,
  WrapperInterrogationText,
  Button,
  ButtonText,
  WrapperSwitch,
  WrapperSwitchText,
  WrapperLink,
  WrapperLinkText,
  WrapperLogo,
  HeaderText,
  Header,
  WrapperTab,
  Tap,
  TapText,
} from './styles';

const SignIn = () => {
  const { navigate } = useNavigation();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [rememberUser, setRememberUser] = useState(false);

  const userRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const handleAccessAccount = useCallback(() => {
    if (user && password) {
      Alert.alert(`Você será redirecionado ${user}`);
      userRef.current?.clear();
      passwordRef.current?.clear();
      navigate('Initial');
    } else {
      Alert.alert('Preencha o usuário e senha');
    }
  }, [user, password]);

  return (
    <Container>
      <Header>
        <HeaderText>Internet</HeaderText>
        <HeaderText isBold> Banking</HeaderText>
      </Header>

      <WrapperLogo>
        <CaixaLogo />
      </WrapperLogo>

      <WrapperTab>
        <Tap>
          <TapText isActive>Pessoa física</TapText>
        </Tap>

        <Tap>
          <TapText>Pessoa jurídica</TapText>
        </Tap>
      </WrapperTab>

      <WrapperForm>
        <KeyboardAvoidingView
          enabled
          style={{ flex: 1, alignItems: 'center' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <WrapperInput>
            <WrapperInputText>Usuário</WrapperInputText>
            <Input
              ref={userRef}
              onChangeText={setUser}
              value={user}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </WrapperInput>

          <WrapperInput style={{ marginTop: 24 }}>
            <WrapperInputText>Senha</WrapperInputText>
            <Input
              ref={passwordRef}
              onChangeText={setPassword}
              value={password}
              textContentType="password"
              secureTextEntry
              returnKeyType="done"
              onSubmitEditing={handleAccessAccount}
            />
            <WrapperInterrogation>
              <WrapperInterrogationText>?</WrapperInterrogationText>
            </WrapperInterrogation>
          </WrapperInput>

          <Button onPress={handleAccessAccount}>
            <ButtonText>Acessar minha conta</ButtonText>
          </Button>

          <WrapperSwitch>
            <WrapperSwitchText>Lembrar meu usuário</WrapperSwitchText>

            <Switch
              trackColor={{ false: '#767577', true: 'rgba(246, 130, 42, 0.4)' }}
              thumbColor={rememberUser ? '#F6822A' : '#f4f3f4'}
              onValueChange={setRememberUser}
              value={rememberUser}
            />
          </WrapperSwitch>

          <Shape style={{ marginTop: 32, marginBottom: 48 }} />

          <WrapperLink>
            <WrapperLinkText>Não tenho usuário</WrapperLinkText>
          </WrapperLink>

          <WrapperLink style={{ marginTop: 8 }}>
            <WrapperLinkText>Modo acessibilidade</WrapperLinkText>
          </WrapperLink>
        </KeyboardAvoidingView>
      </WrapperForm>
    </Container>
  );
};

export { SignIn };
