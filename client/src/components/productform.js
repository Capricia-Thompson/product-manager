import React, { useState } from 'react';
import axios from 'axios';


const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                setTitle("");
                setPrice("");
                setDescription("")
            })
            .catch(err => console.log(err))
            ;
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="desc">Description:</label>
                <textarea cols="50" rows="5" name="desc" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <input type="submit" value="Send" />
        </form>
    )
}

export default ProductForm;