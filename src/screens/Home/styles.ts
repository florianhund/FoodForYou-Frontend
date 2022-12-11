import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  sectionWrapper: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    marginTop: 30,
    marginBottom: 20
  },
  sectionTitle: {
    flex: 1,
    ...FONTS.h3
  },
  sectionText: {
    color: COLORS.primary,
    ...FONTS.body3
  },
  homeWrapper: {
    flex: 1
  },
  homeListFooter: {
    height: 200
  },
  searchWrapper: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2
  },
  searchImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.black
  },
  searchInput: {
    flex: 1,
    marginLeft: SIZES.radius,
    paddingTop: 0,
    paddingBottom: 0,
    ...FONTS.body3
  },
  searchFilterImage: {
    height: 20,
    width: 20,
    tintColor: COLORS.black
  },
  menuTypesContainerStyle: {
    marginTop: 30,
    marginBottom: 30
  },
  menuTypesOpacity: {
    marginLeft: SIZES.padding
  },
  menuTypesText: {
    ...FONTS.h3
  },
  foodCategoriesOpacity: {
    flexDirection: 'row',
    height: 55,
    marginTop: SIZES.padding,
    paddingHorizontal: 8,
    borderRadius: SIZES.radius
  },
  foodCategoriesImage: {
    marginTop: 5,
    height: 50,
    width: 50
  },
  foodCategoriesText: {
    alignSelf: 'center',
    marginRight: SIZES.base,
    ...FONTS.h3
  },
  deliveryOpacity: {
    flexDirection: 'row',
    marginTop: SIZES.base,
    alignItems: 'center'
  },
  deliveryImage: {
    marginLeft: SIZES.base,
    height: 20,
    width: 20
  }
});

export default styles;
