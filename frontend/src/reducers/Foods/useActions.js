export const SET_CARD_LIST = 'SET_CARD_LIST';
export const SET_OPEN = 'SET_OPEN';
export const SET_RAND = 'SET_RAND';

export function setCardList(value) {
    return {
        type: SET_CARD_LIST,
        cardList: value
    };
}
export function setOpen(value) {
    return {
        type: SET_OPEN,
        open: value
    };
}
export function setRand(value) {
    return {
        type: SET_RAND,
        rand: value
    };
}