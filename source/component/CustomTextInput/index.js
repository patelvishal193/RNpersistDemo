import React, {useRef, useState, useEffect} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import Styles from './style';

const CustomTextInput = ({
  value,
  label = null,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  containerStyle = {},
  labelStyle = {},
  editable = true,
  style = {},
  keyboardType = 'default',
  returnKeyType = 'done',
  onSubmit = () => {},
  onFocus = () => {},
  errorText = '',
  multiline = false,
  numberOfLines = 1,
  isRequired = null,
  props,
}) => {
  return (
    <View
    // style={{flex: 1}}
    >
      {label == null ? null : (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom:5
          }}>
          <Text
            style={[
              {
                color: Colors.black,
                // fontFamily: Fonts.Regular_font,
                fontSize: 16,
              },
              labelStyle,
            ]}>
            {label}
          </Text>
          {isRequired == null ? null : (
            <Text
              style={[
                {
                  color: Colors.red,
                  // fontFamily: Fonts.Regular_font,
                  fontSize: 16,
                },
              ]}>
              *
            </Text>
          )}
        </View>
      )}
      <View style={[Styles.View_Main, containerStyle]}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={text => {
            onChangeText(text);
          }}
          editable={editable}
          keyboardType={keyboardType}
          style={[
            {
              color: Colors.black,
              // fontFamily: Fonts.Regular_font,
              fontSize: 16,
              flex: 1,
              paddingVertical: 5,
            },
            style,
          ]}
          numberOfLines={numberOfLines}
          multiline={multiline}
          returnKeyType={returnKeyType}
          onBlur={() => onSubmit()}
          onSubmitEditing={() => onSubmit()}
          onFocus={() => onFocus()}
          {...props}
        />
      </View>
      {errorText == '' ? (
        <View
          style={{
            // height: 25,
            marginBottom: 10,
          }}
        />
      ) : (
        <View
          style={{
            backgroundColor: Colors.tomato_red,
            paddingHorizontal: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 14,
              // fontFamily: Fonts.Regular_font,
            }}>
            {errorText}
          </Text>
        </View>
      )}
    </View>
  );
};
export default CustomTextInput;
