import { SET_USER, REMOVE_USER } from './action-types'

export const setUser = () => ({
    type: SET_USER
});

export const removeUser = id => ({
    type: REMOVE_USER,
});