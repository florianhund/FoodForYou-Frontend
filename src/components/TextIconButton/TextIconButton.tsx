import React from 'react';
import { Text, TouchableOpacity, Image, StyleProp } from 'react-native';

import styles from './styles';

interface Props {
  containerStyle?: StyleProp<any>;
  label: string;
  labelStyle?: StyleProp<any>;
  icon: any;
  iconStyle?: StyleProp<any>;
  onPress: () => void;
}

const TextIconButton: React.FC<Props> = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconStyle,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, containerStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, labelStyle]}>{label}</Text>
      <Image source={icon} style={[styles.icon, iconStyle]} />
    </TouchableOpacity>
  );
};

export default TextIconButton;
