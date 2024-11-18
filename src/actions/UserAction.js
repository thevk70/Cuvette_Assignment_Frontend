import {
  CREATE_USER,
  LOGIN_USER,
  USER_VERIFICATION,
  userAuth,
  USER_AUTHORIZATION,
  POST_JOB,
} from "../actiontypes/ActionTypes";

const createUser = (url, obj) => {
  return {
    type: CREATE_USER,
    resolve: true,
    meta: {
      api: {
        method: "post",
        url: url,
        data: obj,
      },
    },
  };
};

const loginUser = (url, obj) => {
  return {
    type: LOGIN_USER,
    resolve: true,
    meta: {
      api: {
        method: "post",
        url: url,
        data: obj,
      },
    },
  };
};

const userVerify = (url, obj) => {
  return {
    type: USER_VERIFICATION,
    resolve: true,
    meta: {
      api: {
        method: "post",
        url: url,
        data: obj,
      },
    },
  };
};

const postJob = (url, obj) => {
  return {
    type: POST_JOB,
    resolve: true,
    meta: {
      api: {
        method: "post",
        url: url,
        data: obj,
      },
    },
  };
};

const userAuthorization = (url,token) => {
  return {
    type: USER_AUTHORIZATION,
    resolve: true,
    meta: {
      api: {
        method: "post",
        url: url,
        data: token,
      },
    },
  };
};

const setAuthorization = (isAuth) => {
  return {
    type: userAuth,
    isAuth: isAuth,
  };
};

export { createUser, loginUser, userVerify,postJob, setAuthorization };
