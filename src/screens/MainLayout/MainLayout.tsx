import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  StyleProp
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSelectedTab } from '../../store/actions/tab';
import { Home, Search, CartTab, Favourite, Notification } from '..';
import { COLORS, SIZES, icons, constants, dummyData } from '../../constants';
import Header from '../../components/Header/Header';
import styles from './styles';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

interface TabButtonProps {
  label: string;
  icon: any;
  isFocused: boolean;
  outerContainerStyle: StyleProp<any>;
  innerContainerStyle: StyleProp<any>;
  onPress: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  icon,
  isFocused,
  outerContainerStyle,
  innerContainerStyle,
  onPress
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.tabAnimatedWrapper, outerContainerStyle]}>
        <Animated.View style={[styles.tabAnimatedView, innerContainerStyle]}>
          <Image
            source={icon}
            style={[
              styles.tabImage,
              { tintColor: isFocused ? COLORS.white : COLORS.gray }
            ]}
          />
          {isFocused && (
            <Text numberOfLines={1} style={styles.tabText}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

interface MainLayoutProps {
  drawerAnimationStyle: StyleProp<any>;
  navigation: DrawerNavigationHelpers;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  drawerAnimationStyle,
  navigation
}) => {
  const { selectedTab } = useAppSelector(state => state.tabs);
  const dispatch = useAppDispatch();

  const flatListRef = useRef<FlatList>(null);

  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue<any>(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue<any>(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue<any>(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue<any>(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue<any>(COLORS.white);

  const homeFlexStyle = useAnimatedStyle(() => ({
    flex: homeTabFlex.value
  }));
  const homeColorStyle = useAnimatedStyle(() => ({
    backgroundColor: homeTabColor.value
  }));
  const searchFlexStyle = useAnimatedStyle(() => ({
    flex: searchTabFlex.value
  }));
  const searchColorStyle = useAnimatedStyle(() => ({
    backgroundColor: searchTabColor.value
  }));
  const cartFlexStyle = useAnimatedStyle(() => ({
    flex: cartTabFlex.value
  }));
  const cartColorStyle = useAnimatedStyle(() => ({
    backgroundColor: cartTabColor.value
  }));
  const favouriteFlexStyle = useAnimatedStyle(() => ({
    flex: favouriteTabFlex.value
  }));
  const favouriteColorStyle = useAnimatedStyle(() => ({
    backgroundColor: favouriteTabColor.value
  }));
  const notificationFlexStyle = useAnimatedStyle(() => ({
    flex: notificationTabFlex.value
  }));
  const notificationColorStyle = useAnimatedStyle(() => ({
    backgroundColor: notificationTabColor.value
  }));

  useEffect(() => {
    dispatch(setSelectedTab(constants.screens.home));
  }, [dispatch]);

  useEffect(() => {
    if (selectedTab === constants.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false
      });

      homeTabFlex.value = withTiming(4, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab === constants.screens.search) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false
      });

      searchTabFlex.value = withTiming(4, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab === constants.screens.cart) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false
      });

      cartTabFlex.value = withTiming(4, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab === constants.screens.favourite) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false
      });

      favouriteTabFlex.value = withTiming(4, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab === constants.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false
      });

      notificationTabFlex.value = withTiming(4, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.primary, {
        duration: 500
      });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  return (
    <Animated.View style={[styles.mainWrapper, drawerAnimationStyle]}>
      <Header
        containerStyle={styles.mainHeader}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={styles.mainLeftOpacity}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity style={styles.mainRightOpacity}>
            <Image
              source={dummyData.myProfile?.profile_image}
              style={styles.mainImage}
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.mainFlatlistWrapper}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment='center'
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <View style={styles.mainScreens}>
              {item.label === constants.screens.home && <Home />}
              {item.label === constants.screens.search && <Search />}
              {item.label === constants.screens.cart && <CartTab />}
              {item.label === constants.screens.favourite && <Favourite />}
              {item.label === constants.screens.notification && (
                <Notification />
              )}
            </View>
          )}
        />
      </View>
      <View style={styles.mainGradientWrapper}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={styles.mainGradient}
        />
        <View style={styles.mainTabButtonWrapper}>
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab === constants.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => dispatch(setSelectedTab(constants.screens.home))}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab === constants.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => dispatch(setSelectedTab(constants.screens.search))}
          />
          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab === constants.screens.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => dispatch(setSelectedTab(constants.screens.cart))}
          />
          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() =>
              dispatch(setSelectedTab(constants.screens.favourite))
            }
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() =>
              dispatch(setSelectedTab(constants.screens.notification))
            }
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default MainLayout;
