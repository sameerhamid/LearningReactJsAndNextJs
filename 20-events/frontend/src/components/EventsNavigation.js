import { NavLink } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/events"
              className={({ isAcitve }) =>
                isAcitve ? classes.active : undefined
              }
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isAcitve }) =>
                isAcitve ? classes.active : undefined
              }
              to="/events/new"
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
