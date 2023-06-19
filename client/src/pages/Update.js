import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ProductForm from '../components/productform';

const Update = () => {
    const { id } = useParams();
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
    }, [id]);

    const navigate = useNavigate();

    const updateProduct = e => {
        e.preventDefault()
        axios.patch('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate(url)
            })
            .catch(err => console.log(err));
    }

    const url = `/products/${id}`

    return (
        <div className="p-5">
            <Link to="/">Home</Link><br />
            <Link to={url}>Back to product</Link>
            <h1 className='text-5xl bold underline'>Update Product</h1>
            <ProductForm initialTitle={title} initialPrice={price} initialDescription={description} />
        </div>
    )
};

export default Update;