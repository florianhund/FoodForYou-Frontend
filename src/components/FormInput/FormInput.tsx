import React from 'react';
import { Text, View, TextInput, StyleProp } from 'react-native';
import { COLORS } from '../../constants';

import styles from './styles';

interface Props {
  containerStyle?: StyleProp<any>;
  label: string;
  placeholder?: string;
  inputStyle?: StyleProp<any>;
  prependComponent?: React.ReactNode;
  appendComponent?: React.ReactNode;
  onChange: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: any;
  autoCompleteType?: any;
  autoCapitalize?: any;
  errorMsg?: string;
}

const FormInput: React.FC<Props> = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = ''
}) => {
  return (
    <View style={containerStyle}>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      </View>
      <View style={styles.inputWrapper}>
        {prependComponent}
        <TextInput
          style={[styles.textInput, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoComplete={autoCompleteType}
          onChangeText={text => onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
