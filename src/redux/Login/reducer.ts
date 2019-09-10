
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
  } from './constants';


  const initialState = {
    list:[],
    status:{},
    info:{},
    isLoading:false
  };
  
  function loginReducer(state = initialState, action:any) {
    switch (action.type) {
      case USER_LOGIN_SUCCESS:
        state.status=action.response
        // console.log(action)
        return Object.assign({}, state);
      case USER_LOGIN_FAILURE:
        // console.log(action)
        return Object.assign({}, state);
      default:
        return state;
    }
  }
  
  export default loginReducer;
  