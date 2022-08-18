import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <h1>Live Blog</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <AddPost />

    </div>
  );
}

export default App;
