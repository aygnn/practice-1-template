import React, { useState } from 'react'
import './Add.css';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TiTick } from 'react-icons/ti';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

// const AddSchema=


export default function Add() {
  const[products,setProducts]=useState([])
  const[product,setProduct]=useState([])

  
  
  
  return (
    
    <div>
      <Formik
      initialValues={{
        name:'',
        price:'',
        stock:0
      }}
      validationSchema={Yup.object({
        name:Yup.string().required('Product name is required'),
        price:Yup.string().required('Product price is required'),
        stock:Yup.number().required('Product stock is required')
      
      })}

      
      onSubmit={async(values)=>{
        
       
         await axios.post('http://localhost:2000/products',{
          name:values.name,
          price:values.price,
          stock:values.stock
         }).then(res=>console.log(res.data))
       
          
      } }
      >
        {({errors,touched})=>(
       <Form>

         <Field as={TextField}  id="outlined-basic" name='name' label="Product Name" variant="outlined" style={errors.name && touched.name && {borderColor:'red'}}/><br/>
         {/* {errors.name && touched.name && (<div style={{color:'red'}}>{errors.name}</div>)} */}
         <ErrorMessage className='error' name='name'/>

         <Field as={TextField}  id="outlined-basic" name='price' label="Product Price" variant="outlined" /><br/>
         <Field as={TextField}  id="outlined-basic" name='stock' label="Stock number" variant="outlined" /><br/>
        
         <Stack className='stack' spacing={2} direction="row">
   
      <Button type='submit' variant="contained">Contained</Button>
    
    </Stack>
       </Form>
   
 

    )}

      </Formik>

    </div>
  )
}
