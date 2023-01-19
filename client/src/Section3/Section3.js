import React from 'react'
import './Section3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Section3() {
  return (
    <div>
          <div className='sekiller'>
        <Container>
      <Row>
    <Col sm={7}>

        <Col sm={6}>
            <img src='https://preview.colorlib.com/theme/notary/images/atty_1.jpg.webp'/>
        </Col>

        <Col sm={6}>
            <img src='https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp'/>
        </Col>

    </Col>

    <Col sm={5}>
        <div>
            <h3>We Provide Highly <strong> Reliable & Effective </strong>Legal Solutions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
       <button className='bookbtn'>
       Book an appointment
       </button>
       </div>
        
     </Col>
        

      </Row>
      
    </Container>

</div>
        
    </div>
  )
}
