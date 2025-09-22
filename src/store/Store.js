import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "../middlewares/apiMiddleware";
import {userReducer,userStatus} from "../reducers/userReducer";

export default configureStore({
    reducer: {
        // Add your reducers here
        user: userReducer,
        status: userStatus,
    },
    middleware: () => [apiMiddleware],
});