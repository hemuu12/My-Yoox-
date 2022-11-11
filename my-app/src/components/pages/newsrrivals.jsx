import React from 'react'
import axios from "axios"
import {useEffect,useState,useContext} from "react"
// import styles from "../user login/signup.module.css"
import Pagination from "./pagination" 
import Container from "./container"
import {Grid,Button,Skeleton,Stack} from "@chakra-ui/react"
import { CartContext } from '../cartx/cartprovider'
import { addToCart } from '../cartx/action'

const fetch=({page,limit,sort,order})=>{
return axios.get("http://localhost:8000/clothing?",{
    params:{
       _page:page,
       _limit:limit,
       _sort:sort,
       _order:order
    }
})
}
const itemAlreadyExists = (id,cartItems) =>{
    if(cartItems.find((item) => item.id === id)){
      return true;
    }
    return false;
    };



const Newarrivals = () => {
const [data, setData]=useState([])
const [page, setPage]=useState(1)
const[loading,setLoading] = useState(false);
const [sorting,setSorting]=useState("Mens")
const [sortinggender,setSortinggender]=useState("desc")
const {state,dispatch} = useContext(CartContext);

useEffect(()=>{
    setLoading(true)
    fetch({page:page,limit:8,sort:sorting,order:sortinggender}).then((res)=>setData(res.data)) 
    setLoading(false)
},[page,sorting,sortinggender])

if(loading){
    return(
      <Stack my={20}>
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      </Stack>
  
    )
  }
  


  return (
     <>
     <div>
        <div style={{margin:"auto"}}>
            <img  style={{margin:"auto"}} src="https://www.yoox.com/images/yoox80/banners/6764_1_NuoviArrivi_TOP_K_eu.jpg?634485886869569819" alt="1" />
        </div>
        <div style={{textAlign:"right"}}>
            <Button onClick={()=>setSortinggender("asc")}>Low To High</Button>
            <Button onClick={()=>setSortinggender("desc")}>High To Low</Button>
            <Button onClick={()=>setSorting("Mens")}>Mens</Button>
            <Button onClick={()=>setSorting("Womens")}>Women</Button>
        </div>
        <p>line</p>
        <div style={{display:"flex"}}>
            <div></div>
            {/* container */}
            <div>
            <div>
            <Grid mr={20} align="center" justify="center" templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)" }} templateRows={{base:"repeat(1,1fr)",md:"repeat(3,1fr)",lg:"repeat(3,1fr)" }} gap={10}>
                {
                  data?.map((el)=>(
                        <>
                        <div style={{border:'1px solid grey'}}>
                        <Container key={el.id}
                            image={el.images[0]}
                            category={el.category}
                            title={el.title}
                            price={el.strike_price}
                            rating={el.rating}
                            discount={el.discount}
                        /><Button
                            disabled={itemAlreadyExists(el.id,state)}
                            onClick={()=>dispatch(addToCart(el))}>Add To Cart</Button>
                        </div>
                         </>
                  ))  
                }
            </Grid>
            </div>
            <Pagination total={data?.length} current={page} onChange={(page) => setPage(page)}/>
            </div>

        </div>
     </div>








    </>
  )
}

export default Newarrivals