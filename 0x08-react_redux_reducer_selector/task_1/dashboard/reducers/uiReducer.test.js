import { SELECT_COURSE } from '../actions/courseActionTypes';
import {
    LOGIN,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';
import { uiReducer } from './uiReducer';
import { Map } from 'immutable';

const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
});

describe('uiReducer', () => {
    it('returns initial state when no actions have been recorded and an unknown action is passed in.', () => {
        const actual = uiReducer(initialState, "");
        const expected = initialState;
        expect(actual).toEqual(expected);
    });

    it('returns initial state when no actions have been recorded and an unrelated action is passed in', () => {
        const actual = uiReducer(initialState, "SELECT_COURSE");
        const expected = initialState;
        expect(actual).toEqual(expected);
    });

    it('verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property.', () => {
        const actual = uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER);
        const expected = initialState.set('isNotificationDrawerVisible', true);
        console.log(actual);
        expect(actual).toEqual(expected);
    })
})