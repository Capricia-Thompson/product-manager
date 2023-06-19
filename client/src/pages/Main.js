import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductForm from '../components/productform';
import axios from 'axios';


const Main = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, [products])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/` + id)
            .then(res => console.log(res))
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => console.log(res))
    }

    return (
        <div className='p-10'>
            <h1 className='text-5xl bold underline'>Product Listings!</h1>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            {products.map((product, i) => {
                const url = `/products/${product._id}`
                return (<p key={i} className='m-3'>
                    <Link to={url} className='m-2 hover:underline text-lg'>{product.title}</Link>
                    <button onClick={() => { deleteProduct(product._id) }} className='bg-red-400 hover:bg-rose-600 border-black p-1 border-1 rounded-lg hover:underline hover:bold'>Delete</button>
                </p>)
            })}
        </div>
    )
}

export default Main