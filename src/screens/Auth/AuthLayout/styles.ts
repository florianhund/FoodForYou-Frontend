import { StyleSheet } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white
  },
  contentWrapper: {
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  textWrapper: {
    marginTop: SIZES.padding
  },
  title: {
    textAlign: 'center',
    color: COLORS.black,
    ...FONTS.h2
  },
  subtitle: {
    textAlign: 'center',
    color: COLORS.darkGray,
    marginTop: SIZES.base,
    ...FONTS.body3
  }
});

export default styles;
