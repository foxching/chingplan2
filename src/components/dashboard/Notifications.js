import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Notifications = props => {
  const { notifications } = props;
  dayjs.extend(relativeTime);
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(notification => {
                return (
                  <li key={notification.notificationId}>
                    <span className="pink-text">{notification.handle} </span>
                    <span>{notification.content}</span>
                    <div className="grey-text note-date">
                      {dayjs(notification.time).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
