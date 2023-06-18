import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
        <div>
            <Link to="/">Home</Link><br />
            <Link to={url}>Back to product</Link>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input name="title" type="text" defaultValue={title} onChange={e => { setTitle(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input name="price" type="text" defaultValue={price} onChange={(e) => { setPrice(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea name="title" type="text" defaultValue={description} cols="50" rows="5" onChange={e => { setDescription(e.target.value) }} />
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
};

export default Update;