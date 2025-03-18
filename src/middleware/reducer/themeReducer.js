import { TOGGLE_THEME } from "../action/themeAction";


export default function themeReducer(state = false, action) {
    switch (action.type) {
        case TOGGLE_THEME:
            return !state;;

        default:
            return state;
    }
}
