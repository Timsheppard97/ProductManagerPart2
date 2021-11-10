import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const ProductView = () => {
    const [product,setProduct] = useState({});
    const [loaded,setLoaded] = useState(false);
    const {id} = useParams();

    useEffect (() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => {setProduct(res.data);setLoaded(true);console.log(res)})
            .catch(err => console.log(err))
    },[])

    return  (
        <>
        {console.log(product)}
        {
            loaded ?
                <div>
                <p>Title: {product.title}</p>
                <p>Price: $ {product.price}</p>
                <p>Description: {product.description}</p>
                </div> :
                <p>No info retrieved</p>
        }
        </>
    )
}

export default ProductView;