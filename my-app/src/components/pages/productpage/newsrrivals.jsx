
import React, { useEffect, useState } from 'react'
import {  Box, Grid, SimpleGrid } from '@chakra-ui/react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../Redux/Appreducer/Action'
import Container from './container'
import Pagination from "./pagination" 
// import Filter from './Filter'
import SideBar from './SideBar'
import styles from "./container.module.css"


const Newsrrivals = () => { 
  const dispatch=useDispatch()
  const location=useLocation()
 const [searchParams]=useSearchParams()
 const initQuery=searchParams.get("q")
 const [page, setPage]=useState(1)


 const {Products,isLoading}=useSelector((store)=>store.AppReducer)
 useEffect(()=>{
    if(Products.length===0||location||initQuery){
      const type=searchParams.get("type")
      const category=searchParams.getAll("category")
      const brand=searchParams.getAll("brand")
      const price=searchParams.getAll("price")
      const discount=searchParams.get("discount")
      const q=searchParams.get("q")
      const limit=9
      const getProductParams={
        params:{
          type,category,brand,price_lte:price,discount_gte:discount,q,_page:page,_limit:limit
        }

      }

    dispatch(getProducts(getProductParams))


    }



 },[dispatch,location.search,searchParams,initQuery,page])



 return (
   <>
      <Grid
            gridTemplateColumns={"18% 82%"}
            >
          <Box 
          border={"1px solid #edf2f7"}
          
          >
          
          <SideBar/>
          </Box>
          <Box>
              <h1 style={{fontSize:"25px", marginLeft:"25px"}}>All Products</h1>
                <div className={styles.productbox}
                // columns={3} 
                // spacingX='40px'
                // spacingY='30px'
                // w="100%"
                // p="20px"
                >
                {
                  Products.length>0 && Products.map((el)=>(
                    <Container key={el.id} {...el}/>
                  )
                  )
                }
                </div>
                <Pagination total={Products?.length} current={page} onChange={(page) => setPage(page)}/>
          </Box>
          
      </Grid>

      
   </>
  )


}

export default Newsrrivals
