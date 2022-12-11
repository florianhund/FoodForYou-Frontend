import { StyleSheet } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    width: 200,
    padding: SIZES.radius,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2
  },
  header: {
    flexDirection: 'row'
  },
  caloriesWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  caloriesImage: {
    width: 30,
    height: 30
  },
  likeIcon: {
    width: 20,
    height: 20
  },
  body: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  textWrapper: {
    alignItems: 'center',
    marginTop: -20
  },
  textHeader: {
    ...FONTS.h3
  },
  description: {
    color: COLORS.darkGray2,
    textAlign: 'center',
    ...FONTS.body5
  },
  price: {
    marginTop: SIZES.radius,
    ...FONTS.h2
  }
});

export default styles;
