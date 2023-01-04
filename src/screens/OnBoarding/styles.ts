import { StyleSheet } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  headerLogoWrapper: {
    position: 'absolute',
    top: SIZES.height > 800 ? 50 : 25,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerLogoImage: {
    width: SIZES.width * 0.5,
    height: 100
  },
  flatListWrapper: {
    width: SIZES.width
  },
  flatListHeader: {
    flex: 3
  },
  flatListHeaderImageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  flatListHeaderImage: {
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.8,
    marginBottom: -SIZES.padding
  },
  flatListDetails: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.radius
  },
  flatListDetailsTextHeader: {
    ...FONTS.h1,
    fontSize: 25
  },
  flatListDetailsText: {
    marginTop: SIZES.radius,
    textAlign: 'center',
    color: COLORS.darkGray,
    paddingHorizontal: SIZES.padding,
    ...FONTS.body3
  },
  footerWrapper: {
    height: 160
  },
  footerPagination: {
    flex: 1,
    justifyContent: 'center'
  },
  dotsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    borderRadius: 5,
    marginHorizontal: 6,
    height: 10
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding
  },
  finalButtonWrapper: {
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding
  }
});

export default styles;
