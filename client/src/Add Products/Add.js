import React, { useState } from 'react'
import './Add.css';
import { Formik, Form, Field } from 'formik';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function Add() {
  const[products,setProducts]=useState([])
  const[product,setProduct]=useState([])


  // axios.post('http://localhost:2000/products')
  // .then(res=>console.log(res.data))



  return (
    
    <div>
      <Formik
      initialValues={{
        name:'',
        price:'',
        stock:0
      }}
      onSubmit={(values)=>{
      // setProduct(values)
   
  
        console.log(product);
      } }
      >
        {({values})=>(
       <Form>

         <Field as={TextField}  id="outlined-basic" name='name' label="Product Name" variant="outlined" /><br/>
         <Field as={TextField}  id="outlined-basic" name='price' label="Product Price" variant="outlined" /><br/>
         <Field as={TextField}  id="outlined-basic" name='stock' label="Stock number" variant="outlined" /><br/>
        
         <Stack spacing={2} direction="row">
   
      <Button type='submit' variant="contained">Contained</Button>
    
    </Stack>
       </Form>
   
 

    )}

      </Formik>

    </div>
  )
}
