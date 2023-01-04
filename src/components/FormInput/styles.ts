import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    color: COLORS.gray,
    ...FONTS.body4
  },
  errorMsg: {
    color: COLORS.red,
    ...FONTS.body4
  },
  inputWrapper: {
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2
  },
  textInput: {
    flex: 1
  }
});

export default styles;
