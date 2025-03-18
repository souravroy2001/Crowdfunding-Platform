import { combineReducers } from 'redux'
import themeReducer from './reducer/themeReducer'

const rootReducer = combineReducers({
    theme: themeReducer
});

export default rootReducer;
