import { useEffect, useState } from 'react'
import './PostsList.css'
import AddPost from './AddPost'
import Post from './Post'

const PostsList = ({ existingPosts }) => {
    const [posts, setPosts] = useState([])

    // display the existing posts that are saved in the firestore database
    useEffect(() => {
        setPosts(existingPosts)
    })

    // display each post
    const listItems = existingPosts.length > 0 ? posts.map((post) => <li key={Math.random()}><Post title={post.title} body={post.content} /></li>) : undefined

    // create new post
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