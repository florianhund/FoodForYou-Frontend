import React from 'react';
import { View, Text, Image, StyleProp } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { images, SIZES } from '../../../constants';

import styles from './styles';

interface Props {
  title: string;
  subtitle: string;
  titleContainerStyle?: StyleProp<any>;
  children?: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({
  title,
  subtitle,
  titleContainerStyle,
  children
}) => {
  return (
    <View style={styles.wrapper}>
      <KeyboardAwareScrollView
        keyboardDismissMode='on-drag'
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ flex: 1, paddingHorizontal: SIZES.padding }}
      >
        <View style={styles.contentWrapper}>
          <Image
            source={images.logo_02}
            resizeMode='contain'
            style={styles.logo}
          />
        </View>
        <View style={[styles.textWrapper, titleContainerStyle]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
