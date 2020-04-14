import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import NotificationSkeleton from "../../util/NotificationSkeleton";

const Notifications = props => {
  const { notifications, loading } = props;
  dayjs.extend(relativeTime);

  let notificationMarkup = !loading ? (
    notifications.map(notification => (
      <li key={notification.notificationId}>
        <span className="pink-text">{notification.handle} </span>
        <span>{notification.content}</span>
        <div className="grey-text note-date">
          {dayjs(notification.time).fromNow()}
        </div>
      </li>
    ))
  ) : (
    <NotificationSkeleton />
  );

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">{notificationMarkup}</ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
