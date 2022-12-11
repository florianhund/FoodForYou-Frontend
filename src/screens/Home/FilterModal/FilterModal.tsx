import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  StyleProp
} from 'react-native';

import { COLORS, FONTS, SIZES, constants, icons } from '../../../constants';
import IconButton from '../../../components/IconButton/IconButton';
import TwoPointSlider from '../../../components/TwoPointSlider/TwoPointSlider';
import TextButton from '../../../components/TextButton/TextButton';
import TextIconButton from '../../../components/TextIconButton/TextIconButton';
import styles from './styles';

interface SectionProps {
  containerStyle?: StyleProp<any>;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  containerStyle,
  title,
  children
}) => (
  <View style={[styles.sectionWrapper, containerStyle]}>
    <Text style={styles.sectionText}>{title}</Text>
    {children}
  </View>
);

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isVisible, onClose }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  const [showFilterModal, setShowFilterModal] = useState(isVisible);

  const [deliveryTime, setDeliveryTime] = useState<number | null>(null);
  const [ratings, setRatings] = useState<number | null>(null);
  const [tags, setTags] = useState<number | null>(null);

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start(() => onClose());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680]
  });

  const renderDistance = () => (
    <Section title='Distance'>
      <View style={styles.distanceWrapper}>
        <TwoPointSlider
          values={[3, 10]}
          min={1}
          max={20}
          postfix='km'
          onValuesChange={() => {}}
        />
      </View>
    </Section>
  );

  const renderDeliveryTime = () => (
    // eslint-disable-next-line react-native/no-inline-styles
    <Section title='Delivery Time' containerStyle={{ marginTop: 40 }}>
      <View style={styles.deliveryTimeWrapper}>
        {constants.delivery_time.map((item, i) => (
          <TextButton
            key={`delivery_time-${i}`}
            label={item.label}
            labelStyle={{
              color: item.id === deliveryTime ? COLORS.white : COLORS.gray,
              ...FONTS.body3
            }}
            buttonContainerStyle={[
              styles.deliveryTimeButton,
              {
                backgroundColor:
                  item.id === deliveryTime ? COLORS.primary : COLORS.lightGray2
              }
            ]}
            onPress={() => setDeliveryTime(item.id)}
          />
        ))}
      </View>
    </Section>
  );

  const renderPricingRange = () => (
    <Section title='Pricing Range'>
      <View style={styles.priceRangeWrapper}>
        <TwoPointSlider
          values={[10, 50]}
          min={1}
          max={100}
          prefix='$'
          onValuesChange={() => {}}
        />
      </View>
    </Section>
  );

  const renderRatings = () => (
    // eslint-disable-next-line react-native/no-inline-styles
    <Section title='Ratings' containerStyle={{ marginTop: 40 }}>
      <View style={styles.ratingWrapper}>
        {constants.ratings.map((item, i) => (
          <TextIconButton
            key={`ratings-${i}`}
            containerStyle={[
              styles.ratingButton,
              {
                backgroundColor:
                  item.id === ratings ? COLORS.primary : COLORS.lightGray2
              }
            ]}
            label={item.label.toString()}
            labelStyle={{
              color: item.id === ratings ? COLORS.white : COLORS.gray
            }}
            icon={icons.star}
            iconStyle={{
              tintColor: item.id === ratings ? COLORS.white : COLORS.gray
            }}
            onPress={() => setRatings(item.id)}
          />
        ))}
      </View>
    </Section>
  );

  const renderTags = () => (
    <Section title='Tags'>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {constants.tags.map((item, i) => (
          <TextButton
            label={item.label}
            key={`tags-${i}`}
            labelStyle={{
              color: item.id === tags ? COLORS.white : COLORS.gray,
              ...FONTS.body3
            }}
            buttonContainerStyle={[
              styles.tagsButton,
              {
                backgroundColor:
                  item.id === tags ? COLORS.primary : COLORS.lightGray2
              }
            ]}
            onPress={() => setTags(item.id)}
          />
        ))}
      </View>
    </Section>
  );

  return (
    <Modal animationType='fade' transparent visible={isVisible}>
      <View style={styles.filterWrapper}>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View style={styles.filterView} />
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.filterAnimatedView, { top: modalY }]}>
          <View style={styles.filterHeaderWrapper}>
            <Text style={styles.filterHeader}>Filter Your Search</Text>
            <IconButton
              containerStyle={styles.filterCloseIconContainer}
              icon={icons.cross}
              iconStyle={styles.filerCloseIcon}
              onPress={() => setShowFilterModal(false)}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.filterScrollView}
          >
            {renderDistance()}
            {renderDeliveryTime()}
            {renderPricingRange()}
            {renderRatings()}
            {renderTags()}
          </ScrollView>
          <View style={styles.filterFooter}>
            <TextButton
              label='Apply Filters'
              buttonContainerStyle={styles.filterSubmitButton}
              onPress={() => {}}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
