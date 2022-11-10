import React from 'react'
function arr(n) {
    return new Array(n).fill(0);
  }
const Pagination = ({current , total ,onchange}) => {

const page= arr(total).map((a,i)=>(
        <button disabled={current===i+1} key={i} onClick={()=>onchange(i+1)}>{i+1}</button>
    ))
 
return (
    <>
    <div>{page}</div>



    </>
  )
}

export default Pagination