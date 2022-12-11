import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

import { setSelectedTab } from '../store/actions/tab';
import { MainLayout } from '../screens';
import { COLORS, constants, icons, dummyData } from '../constants';
import { useAppSelector, useAppDispatch } from '../hooks';
import styles from './styles';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

const Drawer = createDrawerNavigator();

interface CustomDrawerItemProps {
  label: string;
  icon: any;
  onPress?: () => void;
  isFocused?: boolean;
}

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({
  label,
  icon,
  onPress,
  isFocused
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.itemOpacity,
        { backgroundColor: isFocused ? COLORS.transparentBlack1 : undefined }
      ]}
      onPress={onPress}
    >
      <Image source={icon} style={styles.itemImage} />
      <Text style={styles.itemText}>{label}</Text>
    </TouchableOpacity>
  );
};

interface CustomDrawerConentProps {
  navigation: DrawerNavigationHelpers;
  selectedTab: string;
  setSelectedTab: (tab: string) => any;
}

const CustomDrawerContent: React.FC<CustomDrawerConentProps> = ({
  navigation,
  selectedTab,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  setSelectedTab
}) => {
  const dispatch = useAppDispatch();
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={styles.contentDrawerScroll}
    >
      <View style={styles.contentWrapper}>
        <View style={styles.contentView}>
          <TouchableOpacity
            style={styles.contentOpacity}
            onPress={() => navigation.closeDrawer()}
          >
            <Image source={icons.cross} style={styles.contentImage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.contentProfile}
          onPress={() => console.log('Profile')}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={styles.contentProfileImage}
          />
          <View style={styles.contentProfileView}>
            <Text style={styles.contentProfileHeader}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={styles.contentProfileText}>View your profile</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.contentNavigation}>
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab === constants.screens.home}
            onPress={() => {
              dispatch(setSelectedTab(constants.screens.home));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
            onPress={() => {
              dispatch(setSelectedTab(constants.screens.notification));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            onPress={() => {
              dispatch(setSelectedTab(constants.screens.favourite));
              navigation.navigate('MainLayout');
            }}
          />
          <View style={styles.contentNavigationDivider} />
          <CustomDrawerItem label='Track Your Order' icon={icons.location} />
          <CustomDrawerItem label='Coupons' icon={icons.coupon} />
          <CustomDrawerItem label='Settings' icon={icons.setting} />
          <CustomDrawerItem label='Invite a Friend' icon={icons.profile} />
          <CustomDrawerItem label='Help Center' icon={icons.help} />
        </View>
        <View style={styles.contentNavigationLogout}>
          <CustomDrawerItem label='Logout' icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer: React.FC = () => {
  const { selectedTab } = useAppSelector(state => state.tabs);

  const [progress, setProgress] = useState<any>(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26]
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale }],
    overflow: 'hidden'
  };

  return (
    <View style={styles.drawerWrapper}>
      <Drawer.Navigator
        drawerType='slide'
        overlayColor='transparent'
        drawerStyle={styles.drawerNavigator}
        sceneContainerStyle={styles.drawerNavigatorContainer}
        initialRouteName='MainLayout'
        // eslint-disable-next-line react/no-unstable-nested-components
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);

          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}
      >
        <Drawer.Screen name='MainLayout'>
          {props => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
