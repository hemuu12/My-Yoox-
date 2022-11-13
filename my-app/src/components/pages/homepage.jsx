import React from 'react'
import styles from "../user login/signup.module.css"
import { Heading,Stack,Skeleton } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import WinterWear from "../imges/WinterWear"
import Slide from "../imges/slide"
import TopTrendingBrands from "../imges/TopTrendingBrands"
import { useAuth0 } from "@auth0/auth0-react";
const Homepage = () => {
    const { user , isAuthenticated,isLoading} = useAuth0()

    if (isLoading) {
        return <><Stack>
        <Skeleton height='20px' />
      </Stack></>
      }
  return (
    <>
        <div>
        {
            isAuthenticated===true?<li style={{backgroudColor:'teal',listStyleType: "none",textAlign:'center',padding:"10px",border:'1px solid black',fontSize:"20px",color:"#333"}}>Hi, Welcome {user.name}</li>:null
        }
            <div className={styles.green}>
                <Heading size="sm" align="center" pt="10px">SINGLES' DAY: UP TO 90% OFF</Heading>
                <Link style={{fontWeight:"600"}} to="/">ENDS 11/11</Link>
            </div>
            <div className={styles.big}>
                <div className={styles.go}>
                    <Heading size="md">LIGHTS ON!</Heading>
                    <p style={{fontSize:"14px",marginTop:'8px',marginBottom:'10px',color:"lightgrey",fontFamily:"Montserrat,sans-serif"}}>Enter To Find The Perfect Present</p>
                    <a style={{fontSize:"16px",fontFamily:"Montserrat,sans-serif",textDecoration:"underline"}} href="/" >LET THE SHOW BEGIN</a>
                </div>
            </div>
            <div>
                <div><WinterWear/></div>
                <div><Slide/></div>
                <div><TopTrendingBrands/></div>
            </div>

        </div>


    </>
  )
}

export default Homepage