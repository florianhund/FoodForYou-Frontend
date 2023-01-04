import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { RootStackParamList } from '../../../../App';
import AuthLayout from '../AuthLayout/AuthLayout';
import { COLORS, FONTS, SIZES } from '../../../constants';
import styles from './styles';
import TextButton from '../../../components/TextButton/TextButton';

const Otp: React.FC<StackScreenProps<RootStackParamList, 'Otp'>> = ({
  navigation
}) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        return prevTimer > 0 ? prevTimer - 1 : prevTimer;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuthLayout
      title='OTP Authentication'
      subtitle='An authentication code has been sent to test@test.com'
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
    >
      <View style={styles.otpWrapper}>
        <OTPInputView
          pinCount={4}
          style={styles.otpBox}
          codeInputFieldStyle={styles.otpInput}
          onCodeFilled={code => console.log(code)}
        />
        <View style={styles.timerWrapper}>
          <Text style={styles.timerText}>Didn't receive code?</Text>
          <TextButton
            label={`Resend (${timer}s)`}
            disabled={timer !== 0}
            // eslint-disable-next-line react-native/no-inline-styles
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null
            }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      <View>
        <TextButton
          label='Continue'
          // eslint-disable-next-line react-native/no-inline-styles
          buttonContainerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary
          }}
          onPress={() => console.log('Login Finished')}
        />
        <View style={styles.termsWrapper}>
          <Text style={styles.termsText}>By signing up, you agree to our.</Text>
          <TextButton
            label='Terms and Conditions'
            // eslint-disable-next-line react-native/no-inline-styles
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.primary, ...FONTS.body3 }}
            onPress={() => console.log('navigate to terms and conditions')}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
