import * as actionTypes from '../actionTypes';

const initialState = {
  usersList: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {
        ...state,
        usersList: action.list,
      };
    default:
      return state;
  }
};

export default UserReducer;
