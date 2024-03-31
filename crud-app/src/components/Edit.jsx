import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Edit() {
    const [posts, setPosts] = useState([])

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/articles/${id}`)
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
                <div key={posts.id} className='container'>
                    <h1 className='bg-primary text-white p-2'>{posts.title}</h1>
                    <p>{posts.msg}</p>
                    <Link to={"../edit/" + posts.id} className='btn btn-dark my-2'>Edit Post</Link>
                </div>
            }
        </>
    )
}

export default Edit