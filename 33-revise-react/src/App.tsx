import Post from "./components/Post";

function App() {
  const names = ["Max", "Manu"];
  return (
    <div>
      <Post items={names} />
    </div>
  );
}

export default App;
