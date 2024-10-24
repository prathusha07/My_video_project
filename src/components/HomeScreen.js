import React from 'react';
import { Carousel ,Row,Col ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer";

const HomeScreen =()=>{
    return(
        <>
        
        <div>
            <marquee>VTU Results 2024 out - Check Exam Results!!!
                < Link to ='/result/loginpage'> ClickHere...</Link>
                 Best Of Luck!!!</marquee>
            
        </div>

        <div>
        <Carousel>
        <Carousel.Item>
        <img height='350px'
        className="d-block w-100"
        src="images/vt1.png"
        alt="First slide"
        />
        
        </Carousel.Item>
        <Carousel.Item>
        <img height='350px'
        className="d-block w-100"
        src="images/vt2.png"
        alt="Second slide"
        />

       
       </Carousel.Item>
       <Carousel.Item>
       <img height='350px'
       className="d-block w-100"
       src="images/vt3.png"
       alt="Third slide"
       />
       </Carousel.Item>
       <Carousel.Item>
       <img height='350px'
       className="d-block w-100"
       src="images/vt4.jpg"
       alt="Third slide"
       />
       </Carousel.Item>

       <Carousel.Item>
       <img height='350px'
       className="d-block w-100"
       src="images/vt5.png"
       alt="Third slide"
       />
       </Carousel.Item>
       </Carousel>
       <br/>

       <div>
          <Row>
            <Col  >
                <h3><Link to='/About us'>Vision</ Link></h3>
                <p className='p-style'>To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>
               
                <p className='p-style'>To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>

                <Link to='/About us' className='btn btn-warning'>Read More</Link>
            </Col>
            <Col  >
                 <h3><Link to='/About us'>Mission</ Link></h3>
                
                <p className='p-style'>To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>
               
                <p className='p-style'>To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>

                <Link to='/About us' className='btn btn-warning'>Read More</Link>
            </Col>
            <Col  >
                <h3><Link to='/About us'>Mandate</ Link></h3>
                
                <p className='p-style'>To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>
               
                <p className='p-style'>To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>

                <Link to='/About us' className='btn btn-warning'>Read More</Link>
            </Col>
            
          </Row>
       </div>
    
        </div>
        
        </>
        
    )
}
export default HomeScreen;