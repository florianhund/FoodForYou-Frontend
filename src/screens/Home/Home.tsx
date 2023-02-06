/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList
} from 'react-native';

import HorizontalFoodCard from '../../components/HorizontalFoodCard/HorizontalFoodCard';
import VerticalFoodCard from '../../components/VerticalFoodCard/VerticalFoodCard';
import FilterModal from './FilterModal/FilterModal';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';
import styles from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllMeals } from '../../store/actions/meal';

interface SectionProps {
  title: string;
  onPress: () => void;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, onPress, children }) => {
  return (
    <View>
      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.sectionText}>Show All</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

const Home: React.FC = () => {
  const { meals } = useAppSelector(state => state.meals);
  const dispatch = useAppDispatch();

  const [selectedCategoryId, setSelectedCategoryId] = useState('Fast Food');
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState<any>([]);
  const [recommends, setRecommends] = useState<any>([]);
  const [popular, setPopular] = useState<any>([]);

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleChangeCategory = (categoryId: any, menuTypeId: any) => {
    let selectedRecommend = dummyData.menu.find(
      menu => menu.name === 'Recommended'
    );
    let selectedPopular = dummyData.menu.find(menu => menu.name === 'Popular');
    let selectedMenu = dummyData.menu.find(menu => menu.id === menuTypeId);
    setMenuList(
      selectedMenu?.list.filter(menu => menu.categories.includes(categoryId))
    );
    setRecommends(
      selectedRecommend?.list.filter(menu =>
        menu.categories.includes(categoryId)
      )
    );
    setPopular(
      selectedPopular?.list.filter(menu => menu.categories.includes(categoryId))
    );
  };

  const handleChangeCategory2 = (category: any) => {
    setRecommends(meals.filter(meal => meal.tags?.includes(category)));
    setPopular(meals.filter(meal => meal.tags?.includes(category)));
  };

  useEffect(() => {
    handleChangeCategory2(selectedCategoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllMeals());
  }, [dispatch]);

  const renderSearch = () => (
    <View style={styles.searchWrapper}>
      <Image source={icons.search} style={styles.searchImage} />
      <TextInput placeholder='search food...' style={styles.searchInput} />
      <TouchableOpacity onPress={() => setShowFilterModal(true)}>
        <Image source={icons.filter} style={styles.searchFilterImage} />
      </TouchableOpacity>
    </View>
  );

  const renderMenuTypes = () => (
    <FlatList
      horizontal
      data={dummyData.menu}
      keyExtractor={item => `${item.id}`}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.menuTypesContainerStyle}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[
            styles.menuTypesOpacity,
            {
              marginRight:
                index === dummyData.menu.length - 1 ? SIZES.padding : 0
            }
          ]}
          onPress={() => {
            setSelectedMenuType(item.id);
            handleChangeCategory2(selectedCategoryId);
          }}
        >
          <Text
            style={[
              styles.menuTypesText,
              {
                color:
                  selectedMenuType === item.id ? COLORS.primary : COLORS.black
              }
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );

  const renderRecommendedSection = () => (
    <Section
      title='Recommended'
      onPress={() => console.log('Show all recommended')}
    >
      <FlatList
        data={recommends}
        keyExtractor={item => `${item._id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <HorizontalFoodCard
            containerStyle={{
              height: 180,
              width: SIZES.width * 0.85,
              marginLeft: index === 0 ? SIZES.padding : 18,
              marginRight: index === recommends.length - 1 ? SIZES.padding : 0,
              paddingRight: SIZES.radius,
              alignItems: 'center'
            }}
            imageStyle={{
              marginTop: 35,
              height: 150,
              width: 150
            }}
            item={item}
          />
        )}
      />
    </Section>
  );

  const renderPopularSection = () => (
    <Section
      title='Popular Near You'
      onPress={() => console.log('Show all popular')}
    >
      <FlatList
        data={popular}
        keyExtractor={item => `${item._id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <VerticalFoodCard
            containerStyle={{
              marginLeft: index === 0 ? SIZES.padding : 18,
              marginRight: index === popular.length - 1 ? SIZES.padding : 0
            }}
            item={item}
          />
        )}
      />
    </Section>
  );

  const renderFoodCategories = () => (
    <FlatList
      data={dummyData.categories2}
      keyExtractor={item => `${item}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[
            styles.foodCategoriesOpacity,
            {
              marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index === dummyData.categories2.length - 1 ? SIZES.padding : 0,
              backgroundColor:
                selectedCategoryId === item ? COLORS.primary : COLORS.lightGray2
            }
          ]}
          onPress={() => {
            setSelectedCategoryId(item);
            handleChangeCategory2(item);
          }}
        >
          {/* <Image source={item} style={styles.foodCategoriesImage} /> */}
          <Text
            style={[
              styles.foodCategoriesText,
              {
                color:
                  selectedCategoryId === item ? COLORS.white : COLORS.darkGray
              }
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );

  const renderDeliveryTo = () => (
    <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
      <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>DELIVERY TO</Text>
      <TouchableOpacity style={styles.deliveryOpacity}>
        <Text>{dummyData?.myProfile.address}</Text>
        <Image source={icons.down_arrow} style={styles.deliveryImage} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.homeWrapper}>
      {renderSearch()}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
      <FlatList
        data={meals}
        keyExtractor={item => `${item._id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderDeliveryTo()}
            {renderFoodCategories()}
            {renderPopularSection()}
            {renderRecommendedSection()}
            {renderMenuTypes()}
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius
              }}
              imageStyle={{ marginTop: 20, height: 110, width: 110 }}
              item={item}
              onPress={() => console.log('HorizontalFoodCard')}
            />
          );
        }}
        ListFooterComponent={<View style={styles.homeListFooter} />}
      />
    </View>
  );
};

export default Home;
