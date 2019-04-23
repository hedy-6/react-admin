import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_OUT
} from '../actions/ActionTypes';

export default (state = {isLogin: false,data: {}}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isLogin: true,
        data: action.data
      };
    case LOGIN_FAIL:
      return {
        isLogin: false,
        data: {},
        error: action.error
      };
    case LOGIN_OUT: 
      return {
        isLogin: false,
        data: {}
      }
    default:
      return state;
  }
};
