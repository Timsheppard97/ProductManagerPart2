import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Product from './Components/Product'
import ProductList from './Components/ProductList'

const Main = (props) => {
    const [product,setProduct] = useState([]);
    const [updated,setUpdated] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=> {setProduct(res.data)})
            .catch(err => console.log(err))
    },[updated])

    const update = () => {
        setUpdated(!updated)
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <Product update={update}/>
            <br></br><br></br>
            <ProductList product={product}/>
        </div>
    )
}

export default Main