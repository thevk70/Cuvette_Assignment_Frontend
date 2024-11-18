import { CREATE_USER,USER_VERIFICATION,LOGIN_USER } from "../actiontypes/ActionTypes";

const userReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_USER:
        return action.response;
        case USER_VERIFICATION:
          return action.response;
        case LOGIN_USER:
          return action.response;
      default:
        return state;
    }
  };

export default userReducer;