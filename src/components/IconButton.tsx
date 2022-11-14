import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants';

const IconButton = ({
  containerStyle,
  icon,
  iconStyle,
  onPress
}: Record<string, any>) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Image
        source={icon}
        style={{ width: 30, height: 30, tintColor: COLORS.white, ...iconStyle }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
