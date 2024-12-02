import classes from "./NewPost.module.css";
interface NewPostPropsType {
  onBodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
}
const NewPost: React.FC<NewPostPropsType> = (props) => {
  const { onBodyChange, onAuthorChange, onCancel } = props;
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
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
