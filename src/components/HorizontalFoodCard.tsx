/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { FONTS, COLORS, SIZES, icons } from '../constants';

const HorizontalFoodCard = ({
  containerStyle,
  imageStyle,
  item,
  onPress
}: Record<string, any>) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle
      }}
    >
      <Image source={item.image} style={imageStyle} />
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
          {item.description}
        </Text>
        <Text style={{ ...FONTS.h2, marginTop: SIZES.base }}>
          ${item.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 5,
          right: SIZES.radius
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
