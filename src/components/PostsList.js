import { useState } from 'react'
import './PostsList.css'
import AddPost from './AddPost'
import Post from './Post'

const PostsList = () => {
    const [posts, setPosts] = useState([])

    const listItems = posts.map((post) => <li key={Math.random()}>{post}</li>)

    const addNewPost = (title, body) => {
        const key = Math.random()
        const newPost = <Post title={title} body={body} key={key} />
        setPosts([newPost, ...posts])
        console.log('posts list is now: ', posts)
    }

    return (
        <div className="postsListContainer">
            <AddPost addNewPost={addNewPost} />
            <ul>
            {listItems}
            </ul>
        </div>
    )
}

export default PostsList