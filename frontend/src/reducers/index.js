import { combineReducers } from 'redux';
import foods from "./Foods/useFoods";

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    foods,
    extra
});

export default rootReducer;