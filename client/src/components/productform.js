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
        <form onSubmit={onSubmitHandler} className='p-10'>
            <div className="m-5">
                <label htmlFor="title" className="font-bold underline mr-2">Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className='bg-sky-700 border-1 border-black border-solid' />
            </div>
            <div className="m-5">
                <label htmlFor="price" className="font-bold underline mr-2">Price:</label>
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className='bg-sky-700 border-3 border-black border-solid' />
            </div>
            <div className="m-5 align-top">
                <label htmlFor="desc" className="font-bold underline mr-2">Description:</label>
                <textarea cols="50" rows="5" name="desc" value={description} onChange={(e) => setDescription(e.target.value)} className='bg-sky-700 border-1 border-black border-solid' />
            </div>
            <input type="submit" value="Send" className='bg-cyan-500 hover:bg-cyan-800 border-black p-3 border-1 rounded-lg hover:underline hover:bold' />
        </form>
    )
}

export default ProductForm;