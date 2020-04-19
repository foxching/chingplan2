import React from "react";

const NotificationSkeleton = () => {
  const content = Array.from({ length: 5 }).map((item, index) => {
    return (
      <li key={index}>
        <div className="skeleton-notif-content" />
        <div className="skeleton-notif-date" />
      </li>
    );
  });

  return <React.Fragment>{content}</React.Fragment>;
};

export default NotificationSkeleton;
