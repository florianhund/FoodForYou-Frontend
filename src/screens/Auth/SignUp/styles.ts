import { StyleSheet } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: SIZES.padding
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
  signInWrapper: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    justifyContent: 'center'
  },
  signInText: {
    color: COLORS.darkGray,
    ...FONTS.body3
  }
});

export default styles;
