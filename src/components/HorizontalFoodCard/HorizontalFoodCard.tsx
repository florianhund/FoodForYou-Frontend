import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleProp } from 'react-native';

import { icons } from '../../constants';
import styles from './styles';

interface Props {
  containerStyle?: StyleProp<any>;
  imageStyle?: StyleProp<any>;
  item: any;
  onPress?: () => void;
}

const HorizontalFoodCard: React.FC<Props> = ({
  containerStyle,
  imageStyle,
  item,
  onPress
}) => {
  return (
    <TouchableOpacity style={[styles.opacity, containerStyle]}>
      <Image source={item.image} style={imageStyle} />
      <View style={styles.textWrapper}>
        <Text style={styles.header}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.caloriesWrapper}>
        <Image source={icons.calories} style={styles.caloriesImage} />
        <Text style={styles.caloriesText}>{item.calories} Calories</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
