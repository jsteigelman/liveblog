import './App.css';
import { Link } from "react-router-dom";
import PostsList from './components/PostsList';
import { db } from '../src/firebase'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import {collectIdsAndDocs} from './util'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // get existing posts from firestore database
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const responseContent = querySnapshot.docs.map(collectIdsAndDocs);
      return setPosts(responseContent)
    }
    getData()
  }, [])

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
      <PostsList existingPosts={posts} />
    </div>
  );
}

export default App;
