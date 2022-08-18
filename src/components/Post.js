import './Post.css'

const Post = ({title, body}) => { 
    console.log('post is running!')
    console.log('post is ', title)


    return (
        <div className="postContainer">
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}

export default Post