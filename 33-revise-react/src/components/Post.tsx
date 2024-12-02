import React from "react";
const names = ["First name", "Last name"];
const Post: React.FC = (props) => {
  const choosenName = Math.random() > 0.5 ? names[0] : names[1];
  const {} = props;
  return (
    <div>
      <p>Hello</p>
      <p>{choosenName}</p>
    </div>
  );
};

export default Post;
