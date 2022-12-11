import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 1,
    shadowOpacity: 0.1
  },
  slider: {
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray2
  },
  markerWrapper: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.primary
  },
  markerText: {
    marginTop: 5,
    color: COLORS.darkGray,
    ...FONTS.body3
  }
});

export default styles;
