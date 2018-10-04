import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavigationItem = ({ isActive, to, label }) => {
  let classes = [];
  if (isActive) {
    classes.push("active");
  }

  return (
    <li className={classes.join(" ")}>
      <Link to={to}>
        {label}
      </Link>
    </li>
  );
};

export default withRouter(({ location, ...props }) => {
  const isActive = location.pathname === props.to;

  return <NavigationItem {...props} isActive={isActive} />;
});
