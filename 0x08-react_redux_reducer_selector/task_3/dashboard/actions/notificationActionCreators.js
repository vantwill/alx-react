import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

export function markAsRead(index) {
    return {
        type: MARK_AS_READ,
        index,
    }
}

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
}

const notificationList = [
    {
        id: 1,
        type: "default",
        value: "New course available"
    },
    {
        id: 2,
        type: "urgent",
        value: "New resume available"
    },
    {
        id: 3,
        type: "urgent",
        value: "New data available"
    }
];

// this action expects data to be an [array] of notification objects e.g. { id, type, value }
// This action brings with it a payload of [{object id:1}, {object id:2}, {object id:3}], instantiating it into state
// Every action after can have access to this data after it's fetched into state
export function fetchNotificationsSuccess() {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data: notificationList,
    };
}