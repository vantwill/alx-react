import {
    markAsRead,
    setNotificationFilter,
    fetchNotificationsSuccess,
} from '../actions/notificationActionCreators';
import { notificationsReducer } from './notificationReducer';

import { Map } from 'immutable';
import { notificationNormalizer } from '../schema/notifications';

const initialState = Map({
    notifications: [],
    filter: '',
});


const notificationList = Map(notificationNormalizer([
    {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
    },
    {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
    },
    {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
    }
]));

const testNotificationList = Map(notificationNormalizer([
    {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
    },
    {
        id: 2,
        isRead: true,
        type: "urgent",
        value: "New resume available"
    },
    {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
    }
]));

describe('notificationReducer', () => {
    it('returns initial state when no actions have been recorded and an unknown action is passed in.', () => {
        const actual = notificationsReducer(initialState, "");
        const expected = initialState;
        expect(actual).toEqual(expected);
    });

    it('verifies that FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
        // Expected state is the fetched notificationList merged with init state
        const expected = initialState.merge(notificationList);

        // create the FETCH_NOTIFICATIONS_SUCCESS action
        const fetch = fetchNotificationsSuccess();

        // dispatch action
        const actual = notificationsReducer(initialState, fetch);
        expect(actual).toEqual(expected);
    });

    it('verifies that the action MARK_AS_READ updates the state appropriately', () => {
        // Testing notification id #2
        const expected = testNotificationList;

        // Create the MARK_AS_READ action
        const select = markAsRead(2);

        // Dispatch action
        const actual = notificationsReducer(notificationList, select);
        expect(actual).toEqual(expected);
    });

    it('verifies that the action SET_NOTIFICATION_FILTER updates the state filter', () => {
        const expected = initialState.set('filter', 'urgent');
        const setFilter = setNotificationFilter('urgent');
        const actual = notificationsReducer(initialState, setFilter);
        expect(actual).toEqual(expected);
    });
})