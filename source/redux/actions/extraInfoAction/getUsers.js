import * as actionTypes from '../../actionTypes';
import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import {console_log} from '../../../utils/loggers';
import {callApi} from '../../../api';
import API_CONFIG from '../../../api/api_url';
export const getUsers = page_number => {
  return async dispatch => {
    let response = await callApi(
      API_CONFIG.GET_USERS + '?page=' + JSON.stringify(page_number),
      null,
      API_CONFIG.GET,
      null,
      null,
    );
    // console_log(
    //   'getUsers: ',
    //   JSON.stringify(response.body, null, 2),
    // );
    if (response.body.status == 200) {
      if (page_number == 2) {
        let dataClone = Store.getState().UserReducer.usersList;
        console.log('dataClone: ', dataClone);
        let newData = response.body.data.data;
        dispatch(set_list(dataClone.concat(newData)));
      } else {
        dispatch(set_list(response.body.data.data));
      }
    }
  };
};

export const set_list = list => {
  // console.log('set_list: ', list);
  return {
    type: actionTypes.SET_USERS,
    list,
  };
};
