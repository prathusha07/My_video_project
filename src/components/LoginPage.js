import React,{useState} from "react";
import {Link,useNavigate,useParams} from "react-router-dom";
import {Row,Col,Form,Button,Alert} from "react-bootstrap";
import axios from 'axios';

const LoginPage =()=>{

    const [register,setRegister]=useState("");

    const[error,setError]=useState("");


    const navigate = useNavigate()
    
    const submitHandler = (e)=>{
        e.preventDefault()
        if(register === ''){
            setError("Please enter register id")

        }else {
            axios.get('http://localhost:3005/studentInfo')
              
             .then((response) => {
                console.log("res",response.data)
                response.data.map((data,index)=>{
                    if(data.registerId === register){
                        navigate(`/resultpage/${register}`)
                    }else{
                        setError("invalid Register Id")
                    }
                })
             })

            

        }
    }

    return(
        <>
          <Link to='/' className="btn btn-dark" style={{marginTop:'1rem'}}>Go Back</Link>
         
         <Row className="text-center">
            <Col>
               <h3>Check Your Result Here...</h3>
               
            </Col>
         </Row>
         <br/>
         <Row>
            <Col></Col>
            <Col style={{marginLeft:"-20rem"}}>
            <Form onSubmit={(e)=>submitHandler(e)}>
                  <Form.Label>Enter Your Register Number</Form.Label><br/>
                  <input  type='text' placeholder="Enter your register number"
                  style={{width:"60%"}} value={register}
                   onChange = {(e)=>setRegister(e.target.value)}/><br/>
                  <Button type="Submit" style={{marginTop:"1rem"}}>Submit</Button>

               </Form>
                  
            </Col>
         </Row>
         <Row className="justify-content-center my-3">
           {error ? <Alert variant='danger'>{error}</Alert>:''}
         </Row>
        </>
    )
}
export default LoginPage;