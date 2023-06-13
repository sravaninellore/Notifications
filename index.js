// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const notificationsList = [
  {
    id: 1,
    message: "This is an information message",
    type: "info",
  },
  {
    id: 2,
    message: "This is a success message",
    type: "success",
  },
  {
    id: 3,
    message: "This is a warning message",
    type: "warning",
  },
  {
    id: 4,
    message: "This is an error message",
    type: "error",
  },
];

function NotificationCard({ message, type }) {
  const getIcon = () => {
    switch (type) {
      case "info":
        return "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
      case "success":
        return "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
      case "warning":
        return "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
      case "error":
        return "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";
      default:
        return "";
    }
  };

  return (
    <div className={`notification-card ${type}`}>
      <img src={getIcon()} className="icon" alt={type} />
      <p className="message">{message}</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Notifications</h1>
      <div className="notification-list">
        <NotificationCard
          message="This is an information message"
          type="info"
        />
        <NotificationCard message="This is a success message" type="success" />
        <NotificationCard message="This is a warning message" type="warning" />
        <NotificationCard message="This is an error message" type="error" />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
