import { StyleSheet } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  },
  switchOnContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.primary
  },
  switchOffContainer: {
    width: 40,
    height: 20,
    paddingLeft: 2,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6
  },
  text: {
    marginLeft: SIZES.base,
    ...FONTS.body4
  }
});

export default styles;
