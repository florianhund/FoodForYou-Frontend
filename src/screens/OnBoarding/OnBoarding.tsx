import React, { useRef, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Text,
  View,
  ImageBackground,
  Image,
  Animated,
  FlatList,
  ViewToken
} from 'react-native';

import TextButton from '../../components/TextButton/TextButton';
import { constants, images, FONTS, SIZES, COLORS } from '../../constants';
import styles from './styles';
import { RootStackParamList } from '../../../App';

interface DotsProps {
  scrollX: Animated.Value;
}

const Dots: React.FC<DotsProps> = ({ scrollX }) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={styles.dotsWrapper}>
      {constants.onboarding_screens.map((_screen, i) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
          extrapolate: 'clamp'
        });

        const dotWidth = dotPosition.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [10, 30, 10],
          extrapolate: 'clamp'
        });

        return (
          <Animated.View
            key={`dot-${i}`}
            style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]}
          />
        );
      })}
    </View>
  );
};

const OnBoarding: React.FC<
  StackScreenProps<RootStackParamList, 'OnBoarding'>
> = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatlistRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewChangeRef = useRef(
    ({ viewableItems, changed }: Record<string, ViewToken[]>) =>
      setCurrentIndex(viewableItems[0].index!)
  );

  const renderHeaderLogo = () => (
    <View style={styles.headerLogoWrapper}>
      <Image
        source={images.logo_02}
        resizeMode='contain'
        style={styles.headerLogoImage}
      />
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerWrapper}>
      <View style={styles.footerPagination}>
        <Dots scrollX={scrollX} />
      </View>
      {currentIndex < constants.onboarding_screens.length - 1 ? (
        <View style={styles.buttonWrapper}>
          <TextButton
            label='Skip'
            onPress={() => navigation.replace('SignIn')}
            // eslint-disable-next-line react-native/no-inline-styles
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.darkGray2 }}
          />
          <TextButton
            label='Next'
            onPress={() => {
              flatlistRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true
              });
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            buttonContainerStyle={{
              height: 60,
              width: 200,
              borderRadius: SIZES.radius
            }}
          />
        </View>
      ) : (
        <View style={styles.finalButtonWrapper}>
          <TextButton
            label="Let's Get Started"
            // eslint-disable-next-line react-native/no-inline-styles
            buttonContainerStyle={{ height: 60, borderRadius: SIZES.radius }}
            onPress={() => navigation.replace('SignIn')}
          />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {renderHeaderLogo()}
      <Animated.FlatList
        ref={flatlistRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={item => `${item.id}`}
        renderItem={({ index, item }) => (
          <View style={styles.flatListWrapper}>
            <View style={styles.flatListHeader}>
              <ImageBackground
                source={item.backgroundImage}
                style={[
                  styles.flatListHeaderImageBackground,
                  // eslint-disable-next-line react-native/no-inline-styles
                  { height: index === 1 ? '92%' : '100%' }
                ]}
              >
                <Image source={item.bannerImage} resizeMode='contain' />
              </ImageBackground>
            </View>
            <View style={styles.flatListDetails}>
              <Text style={styles.flatListDetailsTextHeader}>{item.title}</Text>
              <Text style={styles.flatListDetailsText}>{item.description}</Text>
            </View>
          </View>
        )}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
