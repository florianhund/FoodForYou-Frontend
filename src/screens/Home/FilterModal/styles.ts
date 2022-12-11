import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  sectionWrapper: {
    marginTop: SIZES.padding
  },
  sectionText: {
    ...FONTS.h3
  },
  filterWrapper: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack1
  },
  filterView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  filterAnimatedView: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    padding: SIZES.padding,
    borderTopRightRadius: SIZES.padding,
    borderTopLeftRadius: SIZES.padding,
    backgroundColor: COLORS.white
  },
  filterHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterHeader: {
    flex: 1,
    ...FONTS.h3,
    fontSize: 18
  },
  filterCloseIconContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.gray2
  },
  filerCloseIcon: {
    tintColor: COLORS.gray2
  },
  filterScrollView: {
    paddingBottom: 250
  },
  filterFooter: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    height: 110,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    backgroundColor: COLORS.white
  },
  filterSubmitButton: {
    height: 50,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.primary
  },
  priceRangeWrapper: {
    alignItems: 'center'
  },
  distanceWrapper: {
    alignItems: 'center'
  },
  deliveryTimeWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: SIZES.radius
  },
  deliveryTimeButton: {
    width: '30%',
    height: 50,
    margin: 5,
    alignItems: 'center',
    borderRadius: SIZES.base
  },
  ratingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ratingButton: {
    flex: 1,
    height: 50,
    margin: 5,
    alignItems: 'center',
    borderRadius: SIZES.base
  },
  tagsButton: {
    height: 50,
    margin: 5,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
    borderRadius: SIZES.base
  }
});

export default styles;
