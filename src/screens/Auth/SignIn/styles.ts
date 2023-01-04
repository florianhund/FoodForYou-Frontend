import { StyleSheet } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: SIZES.padding * 2
  },
  correctIcon: {
    width: 20,
    height: 20
  },
  togglePassBtn: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  togglePassBtnImage: {
    height: 20,
    width: 20,
    tintColor: COLORS.gray
  },
  saveMeWrapper: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    justifyContent: 'space-between'
  },
  signUpWrapper: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    justifyContent: 'center'
  },
  signUpText: {
    color: COLORS.darkGray,
    ...FONTS.body3
  }
});

export default styles;
