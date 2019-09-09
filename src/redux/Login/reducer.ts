
import {
    // USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOADING_REQUEST,
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
        localStorage.setItem('name',action.info.userInfo.nickname)
        localStorage.setItem('avatar',action.info.userInfo.avatar)
        state.isLoading = false
        return Object.assign({}, state);
      case USER_LOGIN_FAILURE:
        state.isLoading = action.isLoading
        // console.log(state,action)
        return Object.assign({}, state);
      case USER_LOADING_REQUEST:
        state.isLoading = action.isLoading
      return Object.assign({}, state.isLoading);
      default:
        return state;
    }
  }
  
  export default loginReducer;
  