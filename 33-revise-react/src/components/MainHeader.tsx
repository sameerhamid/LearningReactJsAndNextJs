import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";
import Routes from "../utils/routes";
import { Link } from "react-router-dom";

const MainHeader: React.FC = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to={Routes.NewPost} className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
