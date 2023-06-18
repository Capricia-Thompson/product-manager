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

    return (
        <div className='bg-sky-950'>
            <ProductForm />
            {products.map((product, i) => {
                const url = `/products/${product._id}`
                return (<p key={i}>
                    <Link to={url}>{product.title}</Link>
                    <button onClick={() => { deleteProduct(product._id) }}>Delete</button>
                </p>)
            })}
        </div>
    )
}

export default Main