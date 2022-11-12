import React from 'react'
import styles from "../user login/signup.module.css"
import { Heading } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import WinterWear from "../imges/WinterWear"
import Slide from "../imges/slide"
import TopTrendingBrands from "../imges/TopTrendingBrands"

const Homepage = () => {
  return (
    <>
        <div>
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