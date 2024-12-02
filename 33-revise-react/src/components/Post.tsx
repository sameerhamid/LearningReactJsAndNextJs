import React from "react";
interface PostPropsType {
  items: string[];
}
const Post: React.FC<PostPropsType> = (props) => {
  const { items: names } = props;
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
