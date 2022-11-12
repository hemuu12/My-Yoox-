import React from 'react'
import { Button } from "@chakra-ui/react"

function arr(n) {
    return new Array(n).fill(0);
  }
const Pagination = ({current , total ,onChange}) => {

const page= arr(total).map((a,i)=>(
        <Button style={{border:"none",backgroundColor:"white",marginLeft:"10px"}} disabled={current===i+1} key={i} onClick={() => onChange(i + 1)}>{i+1}</Button>
    ))
 
return (
    <>
    <div style={{width:"70%",margin:"auto",marginTop:"20px"}}>{page}</div>
    </>
  )
}

export default Pagination