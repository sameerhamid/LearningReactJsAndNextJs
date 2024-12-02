import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  /**
   * Shows the modal by updating the component state.
   */
  const showModalHandler = () => {
    setModalIsVisible(true);
  };
  /**
   * Hides the modal by updating the component state.
   */
  const hideModalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
