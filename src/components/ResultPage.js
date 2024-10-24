import React,{useState,useEffect} from 'react';
import {Row,Col,Form} from 'react-bootstrap'
import TableData  from './TableData';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ResultPage =()=>{
     
    const [student,setStudent]=useState([]);

    const {id}=useParams()

    useEffect(()=>{
       axios.get('http://localhost:3005/studentInfo')
       .then((response)=>{
        response.data.map((data)=>{
            if (data.registerId === id){
                setStudent(data)
            }
        })
          console.log("state1",student)
       }) .catch((error)=> console.log("err",error))
    },[])
     
    console.log("student",student)
    return(
        <>
           <Row className='justify-content-center my-5'>
               <Col sm={12} md={6}> 
                   <h4>Visvervaya Technological University Belagaum</h4>
                   <h6 style={{marginLeft:"4rem",fontSize:'15px'}}>VII-Semester B.E Examination Result,Nov/Dec 2024</h6>
                </Col>
           </Row>

           <Row>
                <Col sm={12} md={6}>
                    <Form.Group>
                           <Form.Label>Student Name:</Form.Label>
                           <Form.Label style={{marginLeft:"0.5rem"}}>{student.studentName}</Form.Label><br/>
                           <Form.Label>Father's/Mother's Name:</Form.Label>
                           <Form.Label style={{marginLeft:"0.5rem"}}>{student.FatherName}</Form.Label><br/>
                           <Form.Label>College Name:</Form.Label>
                           <Form.Label>{student.collegeName}</Form.Label>
                    </Form.Group>

                </Col>
                <Col sm={12} md={6}>
                     
                <Form.Group>
                           <Form.Label style={{float:"right"}}>Register No:{student.registerId}</Form.Label>
                           
                           
                    </Form.Group>
                </Col>
           </Row>

           <Row>
               <TableData studentSl= {student.registerId}/>
           </Row>
        </>
    )
}
export default ResultPage;