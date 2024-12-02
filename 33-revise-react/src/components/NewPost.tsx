import classes from "./NewPost.module.css";
interface NewPostPropsType {
  onBodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NewPost: React.FC<NewPostPropsType> = (props) => {
  const { onBodyChange, onAuthorChange } = props;
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
    </form>
  );
};

export default NewPost;
