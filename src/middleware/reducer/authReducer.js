import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionType/authActionType";

const initialState = {
    user: null,
    error: null,
};

// Reducer Function
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: null };

        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return { ...state, user: null, error: action.payload };

        case LOGOUT:
            return { ...state, user: null, error: null };

        default:
            return state;
    }
};

export default authReducer;
