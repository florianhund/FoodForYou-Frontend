import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  tabAnimatedWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  tabAnimatedView: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  tabImage: {
    width: 20,
    height: 20
  },
  tabText: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.h3
  },
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  mainHeader: {
    height: 50,
    paddingHorizontal: SIZES.padding,
    marginTop: 40,
    alignItems: 'center'
  },
  mainLeftOpacity: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.radius
  },
  mainRightOpacity: {
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainImage: { width: 40, height: 40, borderRadius: SIZES.radius },
  mainFlatlistWrapper: {
    flex: 1
  },
  mainScreens: {
    height: SIZES.height,
    width: SIZES.width
  },
  mainGradientWrapper: {
    height: 100,
    justifyContent: 'flex-end'
  },
  mainGradient: {
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  mainTabButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white
  }
});

export default styles;
