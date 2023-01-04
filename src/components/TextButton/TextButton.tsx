import React from 'react';
import { Text, TouchableOpacity, StyleProp } from 'react-native';

import styles from './styles';

interface Props {
  label: string;
  labelStyle?: StyleProp<any>;
  buttonContainerStyle?: StyleProp<any>;
  disabled?: boolean;
  onPress: () => void;
}

const TextButton: React.FC<Props> = ({
  label,
  labelStyle,
  buttonContainerStyle,
  onPress,
  disabled
}) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, buttonContainerStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
