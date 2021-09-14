import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "./Container/Home"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
