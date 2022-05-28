import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {Fonts} from '../../utils/fonts';
import {Colors} from '../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../constant';
import {useSelector, useDispatch} from 'react-redux';

const screen_height = Dimensions.get('window').height;
const CustomDrawer = ({...props}) => {
  const [userDetails, setUserDetails] = useState({
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  });

  let UserReducer = useSelector(state => state.UserReducer);
  useEffect(() => {
    if (
      UserReducer !== undefined &&
      UserReducer.usersList !== undefined &&
      UserReducer.usersList.length > 0
    ) {
      setUserDetails(UserReducer.usersList[0]);
    }
  }, [UserReducer]);
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors.white,
        height: screen_height,
      }}>
      <SafeAreaView></SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(NAVIGATION.ADD_USER, {
            isEdit: true,
            userDetails: userDetails,
          })
        }}
        activeOpacity={0.8}
        style={{marginBottom: 50}}>
        <Image
          source={{
            uri: userDetails.avatar,
          }}
          style={Styles.Image}
        />
        <Text style={Styles.text1}>
          {userDetails.first_name} {userDetails.last_name}
        </Text>
        <Text style={Styles.text2}>{userDetails.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.view_button}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate(NAVIGATION.USERS)}>
        <Text style={Styles.text_button}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.view_button}
        activeOpacity={0.8}
        // onPress={() => props.navigation.navigate(NAVIGATION.USERS)}
      >
        <Text style={Styles.text_button}>Notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
