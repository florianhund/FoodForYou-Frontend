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
import VerticalFoodCard from '../../components/VerticalFoodCard';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPopular] = useState([]);

  const handleChangeCategory = (categoryId, menuTypeId) => {
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

  const renderMenuTypes = () => (
    <FlatList
      horizontal
      data={dummyData.menu}
      keyExtractor={item => `${item.id}`}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 30, marginBottom: 20 }}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            marginLeft: SIZES.padding,
            marginRight: index === dummyData.menu.length - 1 ? SIZES.padding : 0
          }}
          onPress={() => {
            setSelectedMenuType(item.id);
            handleChangeCategory(selectedCategoryId, item.id);
          }}
        >
          <Text
            style={{
              color:
                selectedMenuType === item.id ? COLORS.primary : COLORS.black,
              ...FONTS.h3
            }}
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
        keyExtractor={item => `${item.id}`}
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
      tile='Popular Near You'
      onPress={() => console.log('Show all popular')}
    >
      <FlatList
        data={popular}
        keyExtractor={item => `${item.id}`}
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
      data={dummyData.categories}
      keyExtractor={item => `${item.id}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 55,
            marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
            marginTop: SIZES.padding,
            marginRight:
              index === dummyData.categories.length - 1 ? SIZES.padding : 0,
            paddingHorizontal: 8,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCategoryId === item.id
                ? COLORS.primary
                : COLORS.lightGray2
          }}
          onPress={() => {
            setSelectedCategoryId(item.id);
            handleChangeCategory(item.id, selectedMenuType);
          }}
        >
          <Image
            source={item.icon}
            style={{ marginTop: 5, height: 50, width: 50 }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginRight: SIZES.base,
              color:
                selectedCategoryId === item.id ? COLORS.white : COLORS.darkGray,
              ...FONTS.h3
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );

  const renderDeliveryTo = () => (
    <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
      <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>DELIVERY TO</Text>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: SIZES.base,
          alignItems: 'center'
        }}
      >
        <Text>{dummyData?.myProfile.address}</Text>
        <Image
          source={icons.down_arrow}
          style={{ marginLeft: SIZES.base, height: 20, width: 20 }}
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
        ListFooterComponent={<View style={{ height: 200 }} />}
      />
    </View>
  );
};

export default Home;
