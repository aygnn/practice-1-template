import React, { useEffect, useState } from 'react'
import './Cards.css';
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function Cards() {
  const [products,setProducts]=useState([])
  const getProducts=()=>{
    axios.get('http://localhost:2000/products')
    .then(res=>setProducts(res.data))

  }

  useEffect(()=>{
    getProducts()
  },[])
  console.log(products);

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:2000/products/${id}`)
    .then(()=>getProducts())
  }
  return (
    <div>
      <div className='cards'>
    
      {
        products.map((item)=>(
          <Card sx={{ minWidth: 275 }} key={item._id}>
          <CardContent>
          
            <Typography variant="h5" component="div">
            {item.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Price:{item.price}
            </Typography>
            <Typography variant="body2">
            Stock:{item.stock}
            </Typography>
          </CardContent>
          <CardActions>
          <Stack className='buttons' direction="row" spacing={2}>
          <Button variant="contained" onClick={()=>handleDelete(item._id)}>Delete</Button>
            <button className='button-33'>View Detail</button>
    </Stack>
           
          </CardActions>
        </Card>
        ))
      }
      </div>

    </div>
  )
}
