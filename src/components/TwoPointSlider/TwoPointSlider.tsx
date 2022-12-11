import React from 'react';
import { Text, View } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { COLORS, SIZES } from '../../constants';
import styles from './styles';

interface MarkerProps {
  prefix?: string;
  postfix?: string;
  value: number;
}

const CustomMarker: React.FC<MarkerProps> = ({ prefix, postfix, value }) => {
  return (
    <View style={styles.markerWrapper}>
      <View style={[styles.marker, styles.shadow]} />
      <Text style={styles.markerText}>
        {prefix}
        {value}
        {postfix}{' '}
      </Text>
    </View>
  );
};

interface SliderProps {
  values: number[];
  min: number;
  max: number;
  prefix?: string;
  postfix?: string;
  onValuesChange: (inputValues: number[]) => void;
}

const TwoPointSlider: React.FC<SliderProps> = ({
  values,
  min,
  max,
  prefix,
  postfix,
  onValuesChange
}) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{ backgroundColor: COLORS.primary }}
      trackStyle={styles.slider}
      minMarkerOverlapDistance={50}
      // eslint-disable-next-line react/no-unstable-nested-components
      customMarker={e => (
        <CustomMarker
          prefix={prefix}
          postfix={postfix}
          value={e.currentValue}
        />
      )}
      onValuesChange={inputValues => onValuesChange(inputValues)}
    />
  );
};

export default TwoPointSlider;
