import NewProject from "./components/NewProject";
import NoProjectSelcted from "./components/NoProjectSelcted";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      {/* <NewProject /> */}
      <NoProjectSelcted />
    </main>
  );
}

export default App;
