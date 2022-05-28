import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import {CustomTextInput, ImagePickerComponent} from '../../component';
import {Colors} from '../../utils/colors';
import Styles from './style';
import {useDispatch} from 'react-redux';
import {setLoader, editUser} from '../../redux/actions';
import {BackSymbol, CameraSymbol} from '../../utils/svg';
import {Formik} from 'formik';
import {addUserSchema} from '../../utils/schema';
const AddUser = ({navigation, route}) => {
  const dispatch = useDispatch();

  const userDetails = route.params.userDetails;
  const isEdit = route.params.isEdit;
  const [isLoading, setIsLoading] = useState(true);
  const [isImagePicker, setIsImagePicker] = useState(false);
  const [imageSelected, setImageSelected] = useState('');
  const [imageToUpload, setImageToUpload] = useState(false);
  const [imageErrorText, setImageErrorText] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsLoading(true);
      setImageToUpload(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 50);
    });
    return unsubscribe;
  }, []);
  const addUser = values => {
    values.avatar = imageToUpload
      ? imageSelected
      : route.params.userDetails.avatar;
    if (isEdit) {
      values.id = userDetails.id;
    }
    dispatch(setLoader(true));
    dispatch(editUser(isEdit ? 2 : 1, values));
    setTimeout(() => {
      dispatch(setLoader(false));
      navigation.goBack();
    }, 1000);
  };
  return (
    <>
      <ImagePickerComponent
        isVisible={isImagePicker}
        onClose={() => {
          setIsImagePicker(false);
        }}
        onSelect={image => {
          setImageSelected(image);
          setImageToUpload(true);
          setImageErrorText('')
        }}
        onError={() => {
setImageErrorText('Please select valid image type.')
        }}
      />
      <SafeAreaView style={{backgroundColor: Colors.app_theme}} />
      <StatusBar backgroundColor={Colors.app_theme} />
      <View style={Styles.View_header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.goBack();
          }}>
          <BackSymbol />
        </TouchableOpacity>
        <Text style={Styles.headerText}>{isEdit ? userDetails.first_name : ''} {isEdit ? userDetails.last_name : ''}</Text>
        <View style={{width: 25}} />
      </View>
      <View style={Styles.View_Main}>
        {isLoading ? (
          <></>
        ) : (
          <Formik
            initialValues={{
              first_name: isEdit ? userDetails.first_name : '',
              last_name: isEdit ? userDetails.last_name : '',
              email: isEdit ? userDetails.email : '',
            }}
            validationSchema={addUserSchema}
            validateOnChange={false}
            onSubmit={(values, actions) => {
              // actions.resetForm();
              addUser(values);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={Styles.View_Main2}>
                  <TouchableOpacity
                    onPress={() => {
                      setIsImagePicker(true);
                    }}
                    activeOpacity={0.8}
                    style={{alignSelf: 'center', marginTop: -100}}>
                    <Image
                      source={{
                        uri: imageToUpload
                          ? imageSelected
                          : route.params.userDetails.avatar,
                      }}
                      style={Styles.Image}
                    />
                    <View style={Styles.Camera_back}>
                      <CameraSymbol height={20} width={20} />
                    </View>
                  </TouchableOpacity>
                  <View style={Styles.View_Image_spec}>
                    <Text style={{fontSize: 12, color: Colors.dark_grey}}>
                      Supported File extensions: .jpeg,.jpg,.png
                    </Text>
                  </View>
                  {imageErrorText == '' ? null :<Text
            style={{
              color: Colors.red,
              fontSize: 14,
              alignSelf: 'center'
            }}>
            {imageErrorText}
          </Text> }
                  <CustomTextInput
                    label={'First Name'}
                    placeholder={'First Name'}
                    isRequired={true}
                    value={values.first_name}
                    onChangeText={handleChange('first_name')}
                    errorText={errors.first_name}
                  />
                  <CustomTextInput
                    label={'Last Name'}
                    placeholder={'Last Name'}
                    isRequired={true}
                    value={values.last_name}
                    onChangeText={handleChange('last_name')}
                    errorText={errors.last_name}
                  />
                  <CustomTextInput
                    label={'Email Address'}
                    placeholder={'Email Address'}
                    isRequired={true}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    errorText={errors.email}
                  />
                  <TouchableOpacity
                    style={Styles.Save_button}
                    onPress={() => {
                      handleSubmit();
                    }}
                    activeOpacity={0.8}>
                    <Text style={{fontSize: 20, color: Colors.white}}>
                      Save
                    </Text>
                  </TouchableOpacity>
                  <View style={{flex: 1}} />
                </View>
              </>
            )}
          </Formik>
        )}
      </View>
    </>
  );
};
export default AddUser;
