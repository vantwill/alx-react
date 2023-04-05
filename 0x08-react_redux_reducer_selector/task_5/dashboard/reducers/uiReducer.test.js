import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginSuccess,
    loginFailure,
    loginRequest
} from '../actions/uiActionCreators';
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
        const actual = uiReducer(initialState, displayNotificationDrawer());
        const expected = initialState.set('isNotificationDrawerVisible', true);
        console.log(actual);
        expect(actual).toEqual(expected);
    });
});