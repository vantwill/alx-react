const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
}

import {
    LOGIN,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';

// use the initialState as the default value
export function uiReducer(state = initialState, action) {
    switch (action) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isUserLoggedIn: true,
            }
        }
        case LOGIN_FAILURE:
        case LOGOUT: {
            return {
                ...state,
                isUserLoggedIn: false,
            }
        }

        case DISPLAY_NOTIFICATION_DRAWER: {
            return {
                ...state,
                isNotificationDrawerVisible: true
            }
        }

        case HIDE_NOTIFICATION_DRAWER: {
            return {
                ...state,
                isNotificationDrawerVisible: false
            }
        }

        default: {
            return state
        }
    }
}