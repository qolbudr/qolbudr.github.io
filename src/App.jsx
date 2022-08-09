import logo from './logo.svg';
import styles from './App.module.css';
import { Routes, Route } from "@solidjs/router"
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
  );
}

export default App;
