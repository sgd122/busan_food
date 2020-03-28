import { SET_CARD_LIST, SET_OPEN, SET_RAND } from './useActions';
import initial from "./initial";


const foods = (state = initial, action) => {
    switch (action.type) {
        case SET_CARD_LIST:
            return Object.assign({}, state, {
                cardList: action.cardList
            });
        case SET_OPEN:
            return Object.assign({}, state, {
                open: action.open
            });
        case SET_RAND:
            return Object.assign({}, state, {
                rand: action.rand
            });
        default:
            return state;
    }
};

export default foods;