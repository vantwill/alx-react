import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render () {
    const { type, value, html, markAsRead, id } = this.props;
    const list = value ? (<li data-notification-type={ type } onClick={() => markAsRead(id) }>{ value }</li>) :
    (<li data-notification-type={ type } onClick={() => markAsRead(id) } dangerouslySetInnerHTML={ html }></li>)
    return(list);
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
  markAsRead: () => {},
}

export default NotificationItem;
