import React, {useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'


export default (props) => {
    const [product,setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            {
                props.product.map((product,i) => 
                <div key={i}>
                    <Link to={`/api/products/${product._id}`}>
                    {product.title}
                    </Link>
                </div>
                )
            }
        </div>
    )
}