/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal
} from 'react-native';

import { COLORS, FONTS, SIZES, constants, icons } from '../../constants';
import IconButton from '../../components/IconButton';
import TwoPointSlider from '../../components/TwoPointSlider';
import TextButton from '../../components/TextButton';
import TextIconButton from '../../components/TextIconButton';

const Section = ({ containerStyle, title, children }: Record<any, any>) => (
  <View style={{ marginTop: SIZES.padding, ...containerStyle }}>
    <Text style={{ ...FONTS.h3 }}>{title}</Text>
    {children}
  </View>
);

const FilterModal = ({ isVisible, onClose }: Record<any, any>) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  const [showFilterModal, setShowFilterModal] = useState(isVisible);

  const [deliveryTime, setDeliveryTime] = useState<any>('');
  const [ratings, setRatings] = useState<any>('');
  const [tags, setTags] = useState<any>('');

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start(() => onClose());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680]
  });

  const renderDistance = () => (
    <Section title='Distance'>
      <View style={{ alignItems: 'center' }}>
        <TwoPointSlider
          values={[3, 10]}
          min={1}
          max={20}
          postfix='km'
          onValuesChange={() => {}}
        />
      </View>
    </Section>
  );

  const renderDeliveryTime = () => (
    <Section title='Delivery Time' containerStyle={{ marginTop: 40 }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: SIZES.radius
        }}
      >
        {constants.delivery_time.map((item, i) => (
          <TextButton
            key={`delivery_time-${i}`}
            label={item.label}
            labelStyle={{
              color: item.id === deliveryTime ? COLORS.white : COLORS.gray,
              ...FONTS.body3
            }}
            buttonContainerStyle={{
              width: '30%',
              height: 50,
              margin: 5,
              alignItems: 'center',
              borderRadius: SIZES.base,
              backgroundColor:
                item.id === deliveryTime ? COLORS.primary : COLORS.lightGray2
            }}
            onPress={() => setDeliveryTime(item.id)}
          />
        ))}
      </View>
    </Section>
  );

  const renderPricingRange = () => (
    <Section title='Pricing Range'>
      <View style={{ alignItems: 'center' }}>
        <TwoPointSlider
          values={[10, 50]}
          min={1}
          max={100}
          prefix='$'
          onValuesChange={() => {}}
        />
      </View>
    </Section>
  );

  const renderRatings = () => (
    <Section title='Ratings' containerStyle={{ marginTop: 40 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {constants.ratings.map((item, i) => (
          <TextIconButton
            key={`ratings-${i}`}
            containerStyle={{
              flex: 1,
              height: 50,
              margin: 5,
              alignItems: 'center',
              borderRadius: SIZES.base,
              backgroundColor:
                item.id === ratings ? COLORS.primary : COLORS.lightGray2
            }}
            label={item.label}
            labelStyle={{
              color: item.id === ratings ? COLORS.white : COLORS.gray
            }}
            icon={icons.star}
            iconStyle={{
              tintColor: item.id === ratings ? COLORS.white : COLORS.gray
            }}
            onPress={() => setRatings(item.id)}
          />
        ))}
      </View>
    </Section>
  );

  const renderTags = () => (
    <Section title='Tags'>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {constants.tags.map((item, i) => (
          <TextButton
            label={item.label}
            key={`tags-${i}`}
            labelStyle={{
              color: item.id === tags ? COLORS.white : COLORS.gray,
              ...FONTS.body3
            }}
            buttonContainerStyle={{
              height: 50,
              margin: 5,
              paddingHorizontal: SIZES.padding,
              alignItems: 'center',
              borderRadius: SIZES.base,
              backgroundColor:
                item.id === tags ? COLORS.primary : COLORS.lightGray2
            }}
            onPress={() => setTags(item.id)}
          />
        ))}
      </View>
    </Section>
  );

  return (
    <Modal animationType='fade' transparent visible={isVisible}>
      <View style={{ flex: 1, backgroundColor: COLORS.transparentBlack7 }}>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ flex: 1, ...FONTS.h3, fontSize: 18 }}>
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2
              }}
              icon={icons.cross}
              iconStyle={{ tintColor: COLORS.gray2 }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 250 }}
          >
            {renderDistance()}
            {renderDeliveryTime()}
            {renderPricingRange()}
            {renderRatings()}
            {renderTags()}
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: 90,
              left: 0,
              right: 0,
              height: 110,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white
            }}
          >
            <TextButton
              label='Apply Filters'
              buttonContainerStyle={{
                height: 50,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary
              }}
              onPress={() => {}}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
