/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NAVIGATION} from '../../constant';
import {CustomLoader, CustomDrawer} from '../../component';
import {useSelector, useDispatch} from 'react-redux';
import Users from '../../screens/Users';
import AddUser from '../../screens/AddUser';

const Drawer = createDrawerNavigator();

const DashboardRouter = () => {
  let LoaderReducer = useSelector(state => state.LoaderReducer);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (LoaderReducer && LoaderReducer.isLoading) {
      setIsLoading(LoaderReducer.isLoading);
    } else {
      setIsLoading(false);
    }
  }, [LoaderReducer]);
  return (
    <>
      {LoaderReducer && (
        <CustomLoader
          // errorMessage={'LoaderReducer.loading'}
          visible={isLoading}
        />
      )}
      <Drawer.Navigator
        screenOptions={{headerShown: false, drawerType: 'front'}}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name={NAVIGATION.USERS} component={Users} />
        <Drawer.Screen
          name={NAVIGATION.ADD_USER}
          component={AddUser}
          initialParams={{isEdit: false, userDetails: {}}}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DashboardRouter;
