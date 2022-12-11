import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary
  },
  text: {
    color: COLORS.white,
    ...FONTS.h3
  }
});

export default styles;
