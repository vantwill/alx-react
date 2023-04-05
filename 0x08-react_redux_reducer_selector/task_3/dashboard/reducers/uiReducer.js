import { Map } from 'immutable';

import {
    LOGIN,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';

const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
});

export function uiReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return state.set('isUserLoggedIn', true);
        }
        case LOGIN_FAILURE:
        case LOGOUT: {
            return state.set('isUserLoggedIn', false);
        }

        case DISPLAY_NOTIFICATION_DRAWER: {
            return state.set('isNotificationDrawerVisible', true);
        }

        case HIDE_NOTIFICATION_DRAWER: {
            return state.set('isNotificationDrawerVisible', false);
        }

        default: {
            return state
        }
    }
}