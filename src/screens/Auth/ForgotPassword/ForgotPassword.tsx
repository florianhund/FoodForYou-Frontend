import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, icons, SIZES } from '../../../constants';

import AuthLayout from '../AuthLayout/AuthLayout';
import FormInput from '../../../components/FormInput/FormInput';
import { utils } from '../../../utils';
import styles from './styles';
import TextButton from '../../../components/TextButton/TextButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

const ForgotPassword: React.FC<
  StackScreenProps<RootStackParamList, 'ForgotPassword'>
> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isEnableSendEmail = () => email !== '' && emailError === '';

  return (
    <AuthLayout
      title='Password Recovery'
      subtitle='Please enter your email address to recover your password'
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
    >
      <View style={styles.inputWrapper}>
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
      </View>
      <TextButton
        label='Send Email'
        disabled={!isEnableSendEmail()}
        // eslint-disable-next-line react-native/no-inline-styles
        buttonContainerStyle={{
          height: 55,
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnableSendEmail()
            ? COLORS.primary
            : COLORS.transparentPrimray
        }}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
