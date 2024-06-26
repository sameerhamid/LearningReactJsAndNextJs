import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelcted from "./components/NoProjectSelcted";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {

  /**
   *  in projectState : selectedProjectId if undefined that means nothing
   *                    if null that means we are adding 
   */
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelcted onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
