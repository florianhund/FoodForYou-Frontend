import { StyleSheet } from 'react-native';

import { FONTS } from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...FONTS.h3
  }
});

export default styles;
