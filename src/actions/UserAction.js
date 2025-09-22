import {
  CREATE_USER,
  LOGIN_USER,
  USER_VERIFICATION,
  userAuth,
  is_Verify,
  is_LoggedIn,
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

const userAuthorization = (url, token) => {
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

const setLoggedIn = (isLoggedIn) => {
  return {
    type: is_LoggedIn,
    payload: isLoggedIn,
  };
};

const setVerification = (isVerify) => {
  return {
    type: is_Verify,
    payload: isVerify,
  };
};

const setAuthorization = (isAuth) => {
  return {
    type: userAuth,
    isAuth: isAuth,
  };
};

export {
  createUser,
  loginUser,
  userVerify,
  postJob,
  setAuthorization,
  setVerification,
  setLoggedIn,
};
