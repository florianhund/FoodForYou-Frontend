import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

import AuthLayout from '../AuthLayout/AuthLayout';
import { API_BASE_URI, COLORS, FONTS, icons, SIZES } from '../../../constants';
import styles from './styles';
import FormInput from '../../../components/FormInput/FormInput';
import { utils } from '../../../utils';
import TextButton from '../../../components/TextButton/TextButton';
import TextIconButton from '../../../components/TextIconButton/TextIconButton';
import axios, { AxiosResponse } from 'axios';

const SignUp: React.FC<StackScreenProps<RootStackParamList, 'SignUp'>> = ({
  navigation
}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isEnableSignUp = () =>
    email !== '' &&
    username !== '' &&
    password !== '' &&
    emailError === '' &&
    passwordError === '' &&
    usernameError === '';

  return (
    <AuthLayout
      title='Getting Started'
      subtitle='Create an account to continue!'
      titleContainerStyle={{ marginTop: SIZES.radius }}
    >
      <View style={styles.wrapper}>
        <FormInput
          label='Email'
          keyboardType='email-address'
          autoCompleteType='email'
          onChange={val => {
            utils.validateEmail(val, setEmailError);
            setEmail(val);
          }}
          errorMsg={emailError}
          appendComponent={
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={
                  email === '' || (email !== '' && emailError === '')
                    ? icons.correct
                    : icons.cancel
                }
                style={[
                  styles.correctIcon,
                  {
                    tintColor:
                      email === ''
                        ? COLORS.gray
                        : emailError === ''
                        ? COLORS.green
                        : COLORS.red
                  }
                ]}
              />
            </View>
          }
        />
        <FormInput
          label='Username'
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={val => setUsername(val)}
          errorMsg={usernameError}
          appendComponent={
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={
                  username === '' || (username !== '' && usernameError === '')
                    ? icons.correct
                    : icons.cancel
                }
                style={[
                  styles.correctIcon,
                  {
                    tintColor:
                      username === ''
                        ? COLORS.gray
                        : usernameError === ''
                        ? COLORS.green
                        : COLORS.red
                  }
                ]}
              />
            </View>
          }
        />
        <FormInput
          label='Password'
          secureTextEntry={!showPass}
          autoCompleteType='password'
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={val => {
            utils.validatePassword(val, setPasswordError);
            setPassword(val);
          }}
          errorMsg={passwordError}
          appendComponent={
            <TouchableOpacity
              style={styles.togglePassBtn}
              onPress={() => setShowPass(currentShowPass => !currentShowPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={styles.togglePassBtnImage}
              />
            </TouchableOpacity>
          }
        />
        <TextButton
          label='Sign Up'
          disabled={!isEnableSignUp()}
          // eslint-disable-next-line react-native/no-inline-styles
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimray
          }}
          onPress={async () => {
            const [firstName, lastName] = username.split(' ');
            let response: AxiosResponse;
            let userId: string | undefined;
            try {
              response = await axios.post(`${API_BASE_URI}/users`, {
                email,
                password,
                firstName,
                lastName
              });
              if (response.status === 201) {
                // password testTest1_
                console.log('success');
                userId = response.headers.location?.split('/')[2];
                console.log(userId);
              }
              await axios.get(
                `${API_BASE_URI}/users/${userId}/send-verification`
              );
              navigation.navigate('Otp');
            } catch (err: any) {
              console.log(err.response.data);
            }
          }}
        />
        <View style={styles.signInWrapper}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <TextButton
            label='Sign In'
            // eslint-disable-next-line react-native/no-inline-styles
            buttonContainerStyle={{ backgroundColor: null, marginLeft: 3 }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <View>
        <TextIconButton
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue
          }}
          icon={icons.fb}
          iconPosition='LEFT'
          iconStyle={{ tintColor: COLORS.white }}
          label='Continue With Facebook'
          labelStyle={{ marginLeft: SIZES.radius, color: COLORS.white }}
          onPress={() => console.log('Facebook Log In')}
        />
        <TextIconButton
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2
          }}
          icon={icons.google}
          iconPosition='LEFT'
          // eslint-disable-next-line react-native/no-inline-styles
          iconStyle={{ tintColor: null }}
          label='Continue With Google'
          labelStyle={{ marginLeft: SIZES.radius }}
          onPress={() => console.log('Google Log In')}
        />
      </View>
    </AuthLayout>
  );
};

export default SignUp;
