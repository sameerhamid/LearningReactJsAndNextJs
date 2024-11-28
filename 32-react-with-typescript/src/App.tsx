import Todos from "./components/Todos";

function App() {
  let todos = ["Learn React", "Learn Typescript"];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
