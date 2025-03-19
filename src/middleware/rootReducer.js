import { combineReducers } from 'redux'
import themeReducer from './reducer/themeReducer'
import authReducer from './reducer/authReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    auth: authReducer,
});

export default rootReducer;
