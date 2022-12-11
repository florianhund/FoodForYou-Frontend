import React from 'react';
import { Image, TouchableOpacity, StyleProp } from 'react-native';

import styles from './styles';

interface Props {
  containerStyle?: StyleProp<any>;
  icon: any;
  iconStyle?: StyleProp<any>;
  onPress: () => void;
}

const IconButton: React.FC<Props> = ({
  containerStyle,
  icon,
  iconStyle,
  onPress
}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Image source={icon} style={[styles.image, iconStyle]} />
    </TouchableOpacity>
  );
};

export default IconButton;
