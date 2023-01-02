import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleProp } from 'react-native';

import { COLORS, FONTS, icons } from '../../constants';
import styles from './styles';

interface Props {
  containerStyle?: StyleProp<any>;
  item: any;
  onPress?: () => void;
}

const VerticalFoodCard: React.FC<Props> = ({
  containerStyle,
  item,
  onPress
}) => {
  return (
    <TouchableOpacity style={[styles.wrapper, containerStyle]}>
      <View style={styles.header}>
        <View style={styles.caloriesWrapper}>
          <Image source={icons.calories} style={styles.caloriesImage} />
          <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
            {item.calories} Calories
          </Text>
        </View>
        <Image
          source={icons.love}
          style={[
            styles.likeIcon,
            { tintColor: item.isFavourite ? COLORS.primary : COLORS.gray }
          ]}
        />
      </View>
      <View style={styles.body}>
        <Image source={{ uri: item.images[0]?.url }} style={styles.image} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textHeader}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
