import { SET_USER, REMOVE_USER } from '../actions/action-types';

const userState = {
    isUserPresent: false,
    isUserAdmin: false
}

export const user = (state = userState, action) => {
    let updatedState;
    switch (action.type) {
        case SET_USER:
            updatedState = {
                ...state,
                isUserPresent: true,
                isUserAdmin: true
            }
            state = { ...updatedState }
            return state
        case REMOVE_USER:
            updatedState = {
                ...state,
                isUserPresent: false,
                isUserAdmin: false
            }
            state = { ...updatedState }
            return state
        default:
            return state
    }
}