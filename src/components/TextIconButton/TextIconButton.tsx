import React from 'react';
import { Text, TouchableOpacity, Image, StyleProp } from 'react-native';

import styles from './styles';

interface Props {
  containerStyle?: StyleProp<any>;
  label: string;
  labelStyle?: StyleProp<any>;
  icon: any;
  iconStyle?: StyleProp<any>;
  iconPosition?: 'LEFT';
  onPress: () => void;
}

const TextIconButton: React.FC<Props> = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconStyle,
  onPress,
  iconPosition
}) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, containerStyle]}
      onPress={onPress}
    >
      {iconPosition === 'LEFT' && (
        <Image source={icon} style={[styles.icon, iconStyle]} />
      )}
      <Text style={[styles.text, labelStyle]}>{label}</Text>
      {iconPosition !== 'LEFT' && (
        <Image source={icon} style={[styles.icon, iconStyle]} />
      )}
    </TouchableOpacity>
  );
};

export default TextIconButton;
