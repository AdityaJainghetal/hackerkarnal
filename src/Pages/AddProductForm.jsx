import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/ProductSlice';
import { useSelector } from 'react-redux';
// import axios  from 'axios';
const AddProductForm = () => {
  const mydata = useSelector(state=>state.product.products)
// console.log(mydata.length);

    const [input, setInput]=useState([]);
    const dispatch = useDispatch()

    const handleSubmit= async ()=>{
        dispatch(addProduct({...input,id:Date.now()}))
        
    }

    const handleInput=(e)=>{
        let name= e.target.name;
        let value= e.target.value;
        setInput(values=>({...values,[name]:value}))
        
    }
  return (
  <>

  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontFamily:"sans-serif", fontWeight:"700"}}>Enter Product Name</Form.Label>
        <Form.Control type="text"
         placeholder="Enter Product Name" 
         name='name'
         value={input.name}
         onChange={handleInput}

          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontFamily:"sans-serif", fontWeight:"700"}}>Enter your Price</Form.Label>
        <Form.Control type="Number" 
        placeholder="Enter Price" 
        name='price'
        value={input.price}
        onChange={handleInput}
/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Add Product
      </Button>
    
  </>  
  )
}

export default AddProductForm