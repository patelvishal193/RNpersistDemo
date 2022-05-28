import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
  isTabBarVisible: true,
};

const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADER:
      // console.log('loaderState: ', action.loaderState);
      return {
        ...state,
        isLoading: action.loaderState,
      };
    case actionTypes.SET_TABBAR:
      // console.log('loaderState: ', action.loaderState);
      return {
        ...state,
        isTabBarVisible: action.loaderState,
      };
    default:
      return state;
  }
};

export default LoaderReducer;
