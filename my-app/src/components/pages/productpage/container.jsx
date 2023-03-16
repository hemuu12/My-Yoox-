import styles from "./container.module.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass,faUser,faHeart,faBagShopping} from '@fortawesome/free-solid-svg-icons';

import { Text, useToast  } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

library.add(faMagnifyingGlass,faUser,faHeart,faBagShopping)
 
const Container = (el) => {

  const {MRP,discount,id,brand,img,price,rating,ratingT,title}=el
  const [currentProduct,setCurrentProduct]=useState({})
  const toast=useToast()
  const {Products,isLoading}=useSelector((store)=>store.AppReducer)
  useEffect(()=>{
    if(Products){
     const currentProduct=Products.find((item)=>item.id=== +id)
     currentProduct&&setCurrentProduct(currentProduct)

    }
 },[id,Products.length])



  const handleSendCart=()=>{
     axios({
      method:"post",
      url:`https://yoox-server.vercel.app/cart`,
      data:{...currentProduct}
     }).then((res)=>{
      toast({
        title: "Product successfully added in cart",
        variant:"top-accent",
        isClosable: true,
        position:'top-right',
        status:"success",
        duration:1500
      })
     }).catch((err)=>{
      toast({
        title: "Product already present in cart",
        variant:"top-accent",
        isClosable: true,
        position:'top-right',
        status:"error",
        duration:1500,
      })
     })
    }
  
    
    return <>
    <div className={styles.main} key={id} >
       <div  style={{width:"100%"}} >
        <img  src={img}  alt="" />
       <div className={styles.rating}>
           <div>
           <span>{rating}</span> &nbsp;
            <span className={styles.star}>&#9733; </span>
           </div><div> |</div>
           <div>
            {ratingT}
           </div>
        </div>

       </div>
       
       
       <div>
          <p className={styles.title}>{brand}</p>
        <Text
         m={"2px 0px"}
         fontWeight="400"
         color={"#53575f"}
         fontSize="14px"
         width="90%"
         >{title}</Text>
          <div className={styles.prc}>
            <p    >Rs.{price}</p> 
            <p   ><span>Rs.</span>{MRP}</p>
            <p   >{`(${discount}% OFF)`}</p>
          </div>
       </div>
       <div className={styles.hoverWish}>
          <div className={styles.wishlistWord} onClick={()=>handleSendCart()}>
              AddToCart
          </div>
        </div>
    </div>
    
    
    </>
  }


export default Container