import React,{useState,useEffect} from 'react';
import {Table,Container}from 'react-bootstrap'
import axios from 'axios';

const TableData = ({studentSl}) => {

    // console.log("id",studentSl)
    
    const [resultDe,setResultDe]=useState([])


    useEffect(()=>{
        axios.get('http://localhost:3005/studentInfo')
        .then((response)=>{
            console.log("res",response.data)
            let temp=[]
            temp = response.data.filter((d) => d.registerId === studentSl)
            setResultDe(temp)
        })
        .catch((error)=> console.log("eer",error))
    },[studentSl])

    console.log("state2",resultDe)

    const getTotalMarks =(value)=>{
        console.log("value",value)
        let sum=0
        resultDe.map((d)=>{
            sum +=parseInt(d.value)
        })
        return sum
    }

    

    return(
        <Container>
            <Table className='my-5' responsive bordered>
                <thead>
                    <tr>
                        <th style={{textAlign:'center'}}>Sl No</th>
                        <th colSpan={2}> Subject
                            <th style={{padding:"0px 10rem"}}>Code</th>
                            <th style={{paddingLeft:" 10rem"}}>Subject</th>
                        </th>
                        <th colSpan={3}>Examiation Marks Obtained
                            <th style={{paddingLeft:" 10rem"}}>Max</th>
                            <th style={{paddingLeft:" 10rem"}}>Min</th>
                            <th style={{paddingLeft:" 10rem"}}>Obtained</th>
                        </th>
                        <th style={{paddingLeft:" 10rem"}}>Subject Result</th>
                    </tr>
                </thead>
                <tbody>
                      {
                        resultDe.map((data,index)=>{
                            <tr key= {index} >
                                <td>{index+1}</td>
                                <td>{data.code}</td>
                                <td>{data.subject}</td>
                                <td>{data.max_marks}</td>
                                <td>{data.min_marks}</td>
                                <td>{data.obtained_marks}</td>
                                <td>{data.result}</td>
                            </tr>
                        })
                       }
                    
                    
                </tbody>
                
                <thead>
                    <tr>
                        <th colSpan={3}>Grand Total</th>
                        <td>{getTotalMarks('max_marks')}</td>
                        <td>{getTotalMarks('min_marks')}</td>
                        <td>{getTotalMarks('obtained_marks')}</td>
                        <td>PASS</td>
                    </tr>
                    
                </thead>
            </Table>


            <div><b>Total Marks Obtained in Words</b>:
               Two Hundred and Sixty</div>
             <br/>
            <p><b>Result Of Semester</b>:PASS</p>
            <p><b>Percentage</b>:65%</p>
            <p><b>Date</b>:09 Oct 2024</p>
        </Container>
    )
}
export default TableData;