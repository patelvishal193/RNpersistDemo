import * as actionTypes from '../../actionTypes';
import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {console_log} from '../../../utils/loggers';
import {callApi} from '../../../api';
import API_CONFIG from '../../../api/api_url';
export const editUser = (action_type, userData) => {
  return async dispatch => {
    let users_list = Store.getState().UserReducer.usersList;

    if (action_type == 1) {
      let lastUser = users_list[users_list.length - 1];
      userData.id = lastUser.id + 1;
      users_list.push(userData);
    } else {
      users_list.map((element, index) => {
        if (element.id == userData.id) {
          if (action_type == 2) {
            users_list[index] = userData;
          } else if (action_type == 3) {
            users_list.splice(index, 1);
          }
        }
      });
    }
    dispatch(set_list(users_list));
  };
};

export const set_list = list => {
  return {
    type: actionTypes.SET_USERS,
    list,
  };
};
