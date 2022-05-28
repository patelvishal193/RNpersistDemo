import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StatusBar, Image} from 'react-native';
import {Colors} from '../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../constant';
import {LogoSymbol} from '../../utils/svg';
import images from '../../utils/images';
import {useDispatch} from 'react-redux';
import {getUsers} from '../../redux/actions/extraInfoAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(async () => {
    await AsyncStorage.getItem('alreadyOpened').then(async response => {
      if (response != null) {
        
        setTimeout(() => {
          navigation.replace(NAVIGATION.DASHBOARD_ROUTER);
        }, 1000);
      } else {
         await AsyncStorage.setItem('alreadyOpened','true')
        dispatch(getUsers(1));
        setTimeout(() => {
          dispatch(getUsers(2));
        }, 800);
        setTimeout(() => {
          navigation.replace(NAVIGATION.DASHBOARD_ROUTER);
        }, 1000);
      }
    });
  }, []);
  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.white}} />
      <StatusBar backgroundColor={Colors.white} />
      <View style={Styles.View_Main}>
        <Image source={images.logo} style={Styles.logo} resizeMode="contain" />
      </View>
    </>
  );
};
export default Splash;
