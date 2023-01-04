import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

import { COLORS } from '../../constants';
import styles from './styles';

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={styles.wrapper}>
        <View
          style={value ? styles.switchOnContainer : styles.switchOffContainer}
        >
          <View
            style={[
              styles.dot,
              { backgroundColor: value ? COLORS.white : COLORS.gray }
            ]}
          />
        </View>
        <Text
          style={[styles.text, { color: value ? COLORS.primary : COLORS.gray }]}
        >
          Save Me
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomSwitch;
