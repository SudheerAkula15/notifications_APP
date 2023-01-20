const Notification = (props) => {
  const { name, icon, color } = props;
  return (
    <div className="{color} content">
      <img src={icon} className="pic" />
      <p>{name}</p>
    </div>
  );
};

const element = (
  <div className="bg">
    <h1 className="head">Notifications</h1>
    <Notification
      name="Information Center"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      color="blue"
    />
    <Notification
      name="Information Center"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      color="green"
    />
    <Notification
      name="Information Center"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      color="yellow"
    />
    <Notification
      name="Information Center"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      color="red"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
