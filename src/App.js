import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import AddPost from './components/AddPost';
import Post from './components/Post'
import PostsList from './components/PostsList';

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
        <Link to="/about">About</Link>
      </nav>
      <PostsList />
    </div>
  );
}

export default App;
