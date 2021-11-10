import React, {useState} from 'react'
import axios from 'axios'

export default () => {
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        console.log('title',title)
        console.log('price',price)
        console.log('description',description)
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res=>{console.log(res)})
        .catch(res=>{console.log(res)})
        setTitle("")
        setPrice("")
        setDescription("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Title
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
                Price
                <input type="number" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
                Description
                <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                <input type="submit" value="Add Product"/>
            </form>
        </div>
    )
}