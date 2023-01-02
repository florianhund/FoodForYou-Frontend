import { StyleSheet } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  opacity: {
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2
  },
  textWrapper: {
    flex: 1
  },
  header: {
    ...FONTS.h3,
    fontSize: 17
  },
  description: {
    ...FONTS.body4,
    color: COLORS.darkGray2
  },
  price: {
    ...FONTS.h2,
    marginTop: SIZES.base
  },
  caloriesWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    right: SIZES.radius
  },
  caloriesImage: {
    width: 30,
    height: 30
  },
  caloriesText: {
    ...FONTS.body5,
    color: COLORS.darkGray2
  }
});

export default styles;
