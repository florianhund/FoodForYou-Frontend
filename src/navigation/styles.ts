import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const styles = StyleSheet.create({
  itemOpacity: {
    flexDirection: 'row',
    height: 40,
    marginBottom: SIZES.base,
    alignItems: 'center',
    paddingLeft: SIZES.radius,
    borderRadius: SIZES.base
  },
  itemImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.white
  },
  itemText: {
    marginLeft: 15,
    color: COLORS.white,
    ...FONTS.h3
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: SIZES.radius
  },
  contentDrawerScroll: {
    flex: 1
  },
  contentView: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  contentOpacity: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentImage: {
    height: 35,
    width: 35,
    tintColor: COLORS.white
  },
  contentProfile: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    alignItems: 'center'
  },
  contentProfileImage: {
    width: 50,
    height: 50,
    borderRadius: SIZES.radius
  },
  contentProfileView: {
    marginLeft: SIZES.radius
  },
  contentProfileHeader: {
    color: COLORS.white,
    ...FONTS.h3
  },
  contentProfileText: {
    color: COLORS.white,
    ...FONTS.body4
  },
  contentNavigation: {
    flex: 1,
    marginTop: SIZES.padding
  },
  contentNavigationDivider: {
    height: 1,
    marginVertical: SIZES.radius,
    marginLeft: SIZES.radius,
    backgroundColor: COLORS.lightGray1
  },
  contentNavigationLogout: {
    marginBottom: SIZES.padding
  },
  drawerWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  drawerNavigator: {
    flex: 1,
    width: '65%',
    paddingRight: 20,
    backgroundColor: 'transparent'
  },
  drawerNavigatorContainer: {
    backgroundColor: 'transparent'
  }
});

export default styles;
