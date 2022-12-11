import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...FONTS.body3
  },
  icon: {
    marginLeft: 5,
    width: 20,
    height: 20,
    tintColor: COLORS.black
  }
});

export default styles;
