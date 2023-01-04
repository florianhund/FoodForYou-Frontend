import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React, { useState } from 'react';

import AuthLayout from '../AuthLayout/AuthLayout';
import styles from './styles';
import FormInput from '../../../components/FormInput/FormInput';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { utils } from '../../../utils';
import CustomSwitch from '../../../components/CustomSwitch/CustomSwitch';
import TextButton from '../../../components/TextButton/TextButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import TextIconButton from '../../../components/TextIconButton/TextIconButton';

const SignIn: React.FC<StackScreenProps<RootStackParamList, 'SignIn'>> = ({
  navigation
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  const isEnableSignIn = () =>
    email !== '' && password !== '' && emailError === '';

  return (
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed"
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
          label='Password'
          secureTextEntry={!showPass}
          autoCompleteType='password'
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={val => setPassword(val)}
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
        <View style={styles.saveMeWrapper}>
          <CustomSwitch value={saveMe} onChange={val => setSaveMe(val)} />
          <TextButton
            label='Forgot Password?'
            // eslint-disable-next-line react-native/no-inline-styles
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.gray, ...FONTS.body4 }}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>
        <TextButton
          label='Sign In'
          disabled={!isEnableSignIn()}
          // eslint-disable-next-line react-native/no-inline-styles
          buttonContainerStyle={{
            height: 55,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimray
          }}
          onPress={() => {}}
        />
        <View style={styles.signUpWrapper}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TextButton
            label='Sign Up'
            // eslint-disable-next-line react-native/no-inline-styles
            buttonContainerStyle={{ marginLeft: 3, backgroundColor: null }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.navigate('SignUp')}
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
          onPress={() => {
            console.log('Google Log In');
            Linking.openURL('http://172.19.157.105:5000/api/v2/auth/google');
          }}
        />
      </View>
    </AuthLayout>
  );
};

export default SignIn;
