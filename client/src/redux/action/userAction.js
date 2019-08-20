import { SET_CURRENT_USER } from '../user/userTypes';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})