import { StyleSheet } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  otpWrapper: {
    flex: 1,
    marginTop: SIZES.padding * 2
  },
  otpBox: {
    width: '100%',
    height: 50
  },
  otpInput: {
    width: 65,
    height: 65,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    color: COLORS.black,
    ...FONTS.h3
  },
  timerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.padding
  },
  timerText: {
    color: COLORS.darkGray,
    ...FONTS.body3
  },
  termsWrapper: {
    marginTop: SIZES.padding,
    alignItems: 'center'
  },
  termsText: {
    color: COLORS.darkGray,
    ...FONTS.body3
  }
});

export default styles;
