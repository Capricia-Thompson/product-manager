import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'

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

    return (
        <div>
            <Link to="/">Home</Link>
            <h3>{title}</h3>
            <h6>Price: ${price}</h6>
            <p>Description: {description}</p>
            <button><Link to={url}>Update Product</Link></button>
        </div>
    )
};

export default Details;