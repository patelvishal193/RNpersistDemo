import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['UserReducer']
};
import * as reducers from './reducers';
const rootReducer = combineReducers({
  LoaderReducer: reducers.LoaderReducer,
  UserReducer:persistReducer(persistConfig, reducers.UserReducer),
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(Store);