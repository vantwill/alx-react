import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationNormalizer } from '../schema/notifications';

const initialState = Map({
    notifications: [],
    filter: '',
});

export function notificationsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const notifData = action.data.map((notification) => ({
                id: notification.id,
                isRead: false,
                type: notification.type,
                value: notification.value,
            }));
            const notifications = notificationNormalizer(notifData);
            return state.merge(notifications);
        }

        case MARK_AS_READ: {
            return state.setIn(
                ['entities', 'notifications', action.index.toString(), 'isRead'], true
            );
        }
        case SET_TYPE_FILTER: {
            return state.set('filter', action.filter);
        }

        default: {
            return state;
        }
    }
}