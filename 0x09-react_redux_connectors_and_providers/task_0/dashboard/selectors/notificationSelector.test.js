import {
    notificationsReducer
} from '../reducers/notificationReducer';
import {
    fetchNotificationsSuccess
} from '../actions/notificationActionCreators';
import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
} from './notificationSelector';
import { Map } from 'immutable';
import { notificationNormalizer } from '../schema/notifications';
import { markAsRead } from '../actions/notificationActionCreators';

// initial state is constructed from this basic structure fed the notifications payload
const preInitializedState = Map({
    notifications: [],
    filter: 'DEFAULT',
});
const initialState = notificationsReducer(preInitializedState, fetchNotificationsSuccess());

// Given data for notifications
// This data is consistent with the data we've used throughout projects.
const notificationList = [
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
];

describe('notificationsSelector', () => {
    it('verifies the return value of "filter" from state', () => {
        const expected = 'DEFAULT';
        const actual = filterTypeSelected(initialState);
        expect(expected).toEqual(actual);
    });

    it('verifies the list of notifications properly derives and arrives normalized', () => {
        // create a normalized object from the notification list
        const normalizedNotifications = notificationNormalizer(notificationList);

        // expect the list of notifications derived from normalized state
        const expected = normalizedNotifications.entities.notifications;

        // call getNotifications on the initialState
        const actual = getNotifications(initialState);

        expect(actual.toJS()).toEqual(expected);
    });

    it('verifies the list of unread notifications is properly derived after markAsRead action', () => {
        // create a markAsRead action on id: 2
        const markAsReadAction = markAsRead(2);

        // save the new state created from the markAsRead action applied to the state
        const readNotificationState = notificationsReducer(initialState, markAsReadAction);

        // Same as notificationList with id: 2 marked as read
        const unreadNotificationList = [
            {
                id: 1,
                isRead: false,
                type: "default",
                value: "New course available"
            },
            {
                id: 3,
                isRead: false,
                type: "urgent",
                value: "New data available"
            }
        ];

        const normalizedUnreadNotifications = notificationNormalizer(unreadNotificationList);

        const expected = normalizedUnreadNotifications.entities.notifications;

        const actual = getUnreadNotifications(readNotificationState);

        expect(expected).toEqual(actual.toJS());
    })
})