import React from 'react'
import './Section4.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Section4() {
  return (
    <div className='section4'>
        <div className='happy'>
            <h2><strong>Happy Customers</strong></h2>
        </div>
        
        <div>
    <Container>
      <Row className='roww'>
        <Col sm={4}>
            <Card  className='kart'>
            <CardContent className='CardContent'>
                <div className='basliq'>
            <div>
                <img src='https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp'/>
            </div>
            <div>
                <span>Lina Gold</span>
                <span> 
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Owner, Ford</Typography></span>
            </div>
                </div>
                <Typography variant="body2" className='Typography'>
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
        </Typography>
            </CardContent>
            </Card>
            </Col>

    <Col sm={4}>
    <Card  className='kart'>
            <CardContent className='CardContent'>
                <div className='basliq'>
            <div>
                <img src='https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp'/>
            </div>
            <div>
                <span>Lina Gold</span>
                <span> 
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Owner, Ford</Typography></span>
            </div>
                </div>
                <Typography variant="body2" className='Typography'>
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
        </Typography>
            </CardContent>
            </Card> </Col>
     
    <Col sm={4}>
    <Card  className='kart'>
            <CardContent className='CardContent'>
                <div className='basliq'>
            <div>
                <img src='https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp'/>
            </div>
            <div>
                <span>Lina Gold</span>
                <span> 
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Owner, Ford</Typography></span>
            </div>
                </div>
                <Typography variant="body2" className='Typography'>
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
        </Typography>
            </CardContent>
            </Card>
    </Col>
        

      </Row>
      
    </Container>

       
        </div>


    </div>
  )
}
