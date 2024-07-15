import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Auth from "./components/Auth";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Auth />
      <Counter />
    </Provider>
  );
}

export default App;
