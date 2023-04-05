import { Map } from 'immutable';
import { notificationNormalizer } from '../schema/notifications';

// A not on state in this application
// State in this application is kept in an immutable-js Map() object
// All state can be manipulated using the immtable-js methods

export function filterTypeSelected(state) {
    return state.get('filter');
}

export function getNotifications(state) {
    return Map(state.getIn(['entities', 'notifications',]));
}

export function getUnreadNotifications(state) {
    const notifications = state.getIn(['entities', 'notifications']);
    const unreadNotifications = [];
    for (const id in notifications) {
        if (notifications[id].isRead === false) {
            unreadNotifications.push(notifications[id]);
        }
    }
    const normalizedUnreadNotifications = notificationNormalizer(unreadNotifications);
    return Map(normalizedUnreadNotifications.entities.notifications);
}