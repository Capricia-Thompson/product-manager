import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'


const Details = (props) => {

    const [product, setProduct] = useState({})
    const { id } = useParams();

    const { _id, title, price, description } = product;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    });

    const url = `/products/update/${_id}`

    const navigate = useNavigate()

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/` + id)
            .then(res => {
                console.log(res)
                navigate("/")
            })
    }

    return (
        <div className='p-10'>
            <Link to="/">Home</Link>
            <h3 className='text-2xl bold underline m-2'>{title}</h3>
            <h6 className='m-2'>Price: ${price}</h6>
            <p className='m-2 px-25'>Description: {description}</p>
            <button className='bg-emerald-700 hover:bg-emerald-900 border-white p-1 border-3 rounded-lg hover:underline hover:bold mx-2'><Link to={url}>Update Product</Link></button>
            <button onClick={() => { deleteProduct(id) }} className='bg-red-400 hover:bg-rose-600 border-white p-1 border-3 rounded-lg hover:underline hover:bold mx-2'>Delete</button>
        </div>
    )
};

export default Details;