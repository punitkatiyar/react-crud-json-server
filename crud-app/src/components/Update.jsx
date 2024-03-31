import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Update() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/articles")
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
    }, [])
    return (
        <>
            <div className='container'>
                <h1 className='display-1'>View All Data</h1>
            </div>
            <hr />
            {
                posts.map(post => <div key={posts.id} className='container'>
                    <h1 className='bg-primary text-white p-2'>{post.title}</h1>
                    <p>{post.msg}</p>
                    <Link to={"../edit/" + post.id} className='btn btn-dark my-2'>Edit Post</Link>
                </div>)
            }
        </>
    )
}

export default Update