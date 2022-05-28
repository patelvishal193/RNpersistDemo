import React, {useEffect, useLayoutEffect, useState, useContext} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  Modal,
} from 'react-native';
import Styles from './style';
import {Colors} from '../../utils/colors';
import {CrownModalSymbol, CrownSymbol} from '../../utils/svg';
import ImagePicker from 'react-native-image-crop-picker';
import {Fonts} from '../../utils/fonts';
const ImagePickerComponent = ({
  navigation,
  route,
  isVisible,
  onClose,
  onSelect,
  onError
}) => {
  const validTypes = ['image/jpeg','image/jpg','image/png']
  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
    }).then(image => {
      
      if(validTypes.includes(image.mime)){
        onClose();
        onSelect(image.path);
      } else {
        onClose();
        onError()
      }
    });
  };
  const openGalary = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      if(validTypes.includes(image.mime)){
        onClose();
        onSelect(image.path);
      } else {
        onClose();
        onError()
      }
      
    });
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          onClose();
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            onClose();
          }}
          style={Styles.view_main_modal}>
          <TouchableOpacity
            activeOpacity={1}
            style={Styles.modal_white_back}
            onPress={() => openGalary()}>
            <Text style={Styles.text_option}>
           Gallery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={Styles.modal_white_back}
            onPress={() => openCamera()}>
            <Text style={Styles.text_option}>
           Camera
            </Text>
          </TouchableOpacity>
          <View style={{height: 5, backgroundColor: Colors.border_color}} />
          <TouchableOpacity
            activeOpacity={1}
            style={Styles.modal_white_back}
            onPress={() => onClose()}>
            <Text style={Styles.text_option}>Cancel</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
export default ImagePickerComponent;
