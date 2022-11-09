import React from 'react'
import styles from "../user login/signup.module.css"
import { Heading } from "@chakra-ui/react"
import {Link} from "react-router-dom"
const Homepage = () => {
  return (
    <>
        <div>
            <div className={styles.green}>
                <Heading size="sm" align="center" pt="10px">SINGLES' DAY: UP TO 90% OFF</Heading>
                <Link style={{fontWeight:"600"}} to="/">ENDS 11/11</Link>
            </div>
            <div className={styles.big}></div>

        </div>


    </>
  )
}

export default Homepage