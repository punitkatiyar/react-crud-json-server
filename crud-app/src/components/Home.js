```
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/articles")
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
    }, [])
    return (
        <>
            <div className='head'><Link to="/">Home</Link></div>
            {posts.map(post =>
                <div key={post.id} className='post'>
                    <p>{post.msg}</p>
                    <Link to={"update/" + post.id}>Edit</Link>

                </div >)
            }
        </>
    )
}
export default Home
```
