import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '@mui/material/Button';
import { IoIosHome } from 'react-icons/io';
import Stack from '@mui/material/Stack';

export default function Navbar() {
  return (
    <div className='navbarr'>
            <div>
                <img src='https://dynamic.brandcrowd.com/asset/logo/48ab2e9f-e43b-4e02-a8e6-3a4f7dc47f2f/logo-search-grid-1x?v=638018435465700000'/>
                </div>
                
    <Stack className='cappy' direction="row" spacing={2}>
      <Button className='home' variant="contained"> <Link to={'/'}><IoIosHome/> Home</Link></Button>
 <button className='button-83'> <Link to={'Add'}>Add new Product    </Link></button>
    </Stack>
       
       
        
    </div>
  )
}
