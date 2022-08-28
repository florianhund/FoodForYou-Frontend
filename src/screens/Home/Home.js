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

import HorizontalFoodCard from '../../components/HorizontalFoodCard';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedMenu = dummyData.menu.find(menu => menu.id === menuTypeId);
    setMenuList(
      selectedMenu?.list.filter(menu => menu.categories.includes(categoryId))
    );
  };

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSearch = () => (
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2
      }}
    >
      <Image
        source={icons.search}
        style={{ width: 20, height: 20, tintColor: COLORS.black }}
      />
      <TextInput
        placeholder='search food...'
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
          ...FONTS.body3,
          paddingTop: 0,
          paddingBottom: 0
        }}
      />
      <TouchableOpacity>
        <Image
          source={icons.filter}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black
          }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {renderSearch()}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
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
      />
    </View>
  );
};

export default Home;
