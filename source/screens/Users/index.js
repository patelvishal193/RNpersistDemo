import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Colors} from '../../utils/colors';
import Styles from './style';
import images from '../../utils/images';
import {
  DeleteSymbol,
  DrawerSymbol,
  EditSymbol,
  NotificationSymbol,
  SearchSymbol,
} from '../../utils/svg';
import {setLoader, editUser} from '../../redux/actions';
import {DrawerActions} from '@react-navigation/native';
import {NAVIGATION} from '../../constant';
import {useSelector, useDispatch} from 'react-redux';
const Users = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [optionList, setOptionList] = useState([]);
  const [optionListToShow, setOptionListToShow] = useState([]);
  let UserReducer = useSelector(state => state.UserReducer);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (
        UserReducer !== undefined &&
        UserReducer.usersList.length > 0
      ) {
        setOptionList(UserReducer.usersList);
        setOptionListToShow(UserReducer.usersList);
      }
    });
    return unsubscribe;
  }, [UserReducer.usersList]);

  const [isLoadingFinished, setIsLoadingFinished] = useState(false);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingFinished(true);
    }, 1500);
  }, []);
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: Colors.white,
          flexDirection: 'row',
        }}>
        <Image source={{uri: item.avatar}} style={Styles.list_image} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            borderBottomWidth: 0.5,
            borderColor: Colors.border_color,
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={Styles.textList1}>
              {item.first_name} {item.last_name}
            </Text>
            <Text style={Styles.textList3}>{item.email}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginRight: 15, padding: 5}}
            onPress={() => {
              navigation.navigate(NAVIGATION.ADD_USER, {
                isEdit: true,
                userDetails: item,
              });
            }}>
            <EditSymbol />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{padding: 5}}
            onPress={() => {
              dispatch(editUser(3, item));
            }}>
            <DeleteSymbol />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  useEffect(() => {
    searchUser(searchText);
  }, [searchText]);
  const searchUser = search_text => {
    let search_key = search_text.toLowerCase();
    let user_sorted = optionList.filter(item => {
      let var_compare =
        item.first_name.toLowerCase() + ' ' + item.last_name.toLowerCase();
      return (
        var_compare.includes(search_key) ||
        item.first_name.includes(search_key) ||
        item.last_name.includes(search_key) ||
        item.email.includes(search_key)
      );
    });
    setOptionListToShow(user_sorted);
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.app_theme}} />
      <StatusBar backgroundColor={Colors.app_theme} />
      <View style={Styles.View_header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <DrawerSymbol />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Listing</Text>
        <NotificationSymbol />
      </View>
      <View style={Styles.View_Main}>
        <View style={Styles.View_search}>
          <TextInput
            value={searchText}
            style={Styles.TextInput}
            placeholder={'Search'}
            onChangeText={text => {
              setSearchText(text);
            }}
            returnKeyType="search"
          />
          <SearchSymbol style={Styles.SearchSymbol} />
        </View>
        <FlatList
          style={{
            marginTop: 5,
            borderRadius: 10,
          }}
          showsVerticalScrollIndicator={false}
          data={optionListToShow}
          renderItem={renderItem}
        />
        <TouchableOpacity
          style={Styles.float_button}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate(NAVIGATION.ADD_USER, {
              isEdit: false,
              userDetails: {},
            });
          }}>
          <Text style={{fontSize: 26, color: Colors.white}}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Users;
