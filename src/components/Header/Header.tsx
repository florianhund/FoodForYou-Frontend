import React from 'react';
import { View, Text, StyleProp } from 'react-native';
import styles from './styles';

interface Props {
  containerStyle: StyleProp<any>;
  title: string;
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}

const Header: React.FC<Props> = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent
}) => {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      {leftComponent}
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {rightComponent}
    </View>
  );
};

export default Header;
