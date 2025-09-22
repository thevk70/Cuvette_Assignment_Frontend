import {
  CREATE_USER,
  USER_VERIFICATION,
  LOGIN_USER,
  is_Verify,
 is_LoggedIn,
} from "../actiontypes/ActionTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.response;
    case USER_VERIFICATION:
      return action.response;
    case LOGIN_USER:
      return action.responseObject.data;
    default:
      return state;
  }
};

const userStatus = (state = false, action) => {
  switch(action.type){
    case is_Verify:
      return action.payload ?? state;
    case is_LoggedIn:
      return action.payload ?? state;
    default:
      return state;
  }
};

export {userReducer,userStatus};
