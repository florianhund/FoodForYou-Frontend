/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { FONTS, COLORS } from '../constants';

const TextButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  onPress
}: Record<string, any>) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
