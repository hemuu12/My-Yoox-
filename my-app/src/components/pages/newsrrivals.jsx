import React from 'react'
import axios from "axios"
import {useEffect,useState} from "react"
// import styles from "../user login/signup.module.css"
import Pagination from "./pagination" 
import Container from "./container"
import {Grid} from "@chakra-ui/react"

const fetch=({page,limit})=>{
return axios.get("http://localhost:8000/clothing?",{
    params:{
       _page:page,
       _limit:limit 
    }
})
}

const Newarrivals = () => {
const [data, setData]=useState([])
const [page, setPage]=useState(1)




useEffect(()=>{
    fetch({page:{page},limit:9}).then((res)=>setData(res.data)) 
},[page])



  return (
     <>
     <div>
        <div style={{margin:"auto"}}>
            <img  style={{margin:"auto"}} src="https://www.yoox.com/images/yoox80/banners/6764_1_NuoviArrivi_TOP_K_eu.jpg?634485886869569819" alt="1" />
        </div>
        {/* <p></p> */}
        <div>
            sorting
        </div>
        <p>line</p>
        <div style={{display:"flex"}}>
            <div></div>
            {/* container */}
            <div>
            <div>
            <Grid mr={20} align="center" justify="center" templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)" }}  gap={10}>
                {
                  data?.map((el)=>(
                        <Container key={el.id}
                            image={el.images[0]}
                            category={el.category}
                            title={el.title}
                            price={el.strike_price}
                            rating={el.rating}
                            discount={el.discount}
                        />
                  ))  
                }
            </Grid>
            </div>
            <Pagination total={data?.length} current={page} onClick={(page)=>setPage(page)} />
            </div>

        </div>
     </div>








    </>
  )
}

export default Newarrivals