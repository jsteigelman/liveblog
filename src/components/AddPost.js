import { useState } from 'react'
import './AddPost.css'

const AddPost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    // reset text to empty fields
    const handleReset = (e) => {
        e.preventDefault()
        setTitle('')
        setBody('')
    }

    // add post to appropriate section
    const handleSubmit = (e) => {
        e.preventDefault()
        return handleReset(e)
    }

    return (
        <div className="addPostContainer">
            <h2>Add a new post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <textarea type="text" name="body" value={body} rows="5" cols="10" className="bodyInput" placeholder="Body" onChange={(e) => setBody(e.target.value)} />
                <div className="addPostContainer__footer">
                    <button onClick={(e) => handleReset(e)} className="resetInput">Clear</button>
                    <input type="submit" value="Submit" className="submitInput" />
                </div>
            </form>
        </div>
    )
}

export default AddPost