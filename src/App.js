import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
