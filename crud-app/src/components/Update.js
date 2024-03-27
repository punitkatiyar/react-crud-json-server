import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
function Update() {
    const [datas, setDatas] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/articles/${id}`)
            .then(res => {
                console.log(res)
                setDatas(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    return (
        <div className='form'>
            <div className='head'><Link to="/">Home</Link></div>
            <div className='post'>
                <h1>{datas.title}</h1>
                <p>{datas.msg}</p>
                <Link to={datas.id}>Edit</Link>
            </div>
        </div >
    )
}

export default Update
