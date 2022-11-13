import React from 'react'
import {Stack,Checkbox,Heading,Button,Input,InputGroup } from "@chakra-ui/react"
import styles from "../user login/signup.module.css"



const Login = () => {
  
  return (
    <>
    <Stack align="center" size="sm" p="10px" border="1px solid black">
    
        <Heading size="sm" fontSize="20px" >It’s great to see you again.</Heading>
        <p className={styles.line}></p>
        <Heading size="sm" fontSize="14px" fontWeight="500">Log in with</Heading>
        <div  width="100px" style={{display:"flex",gap:"10px",alignItems:"center",justifyItems:'center'}}>
            <Button w="180px"  className={styles.login}><div className={styles.onOver}></div></Button>
            <Button w="180px"  mt="25px" className={styles.google}><div className={styles.googleon} ></div></Button>
        </div>
        <p className={styles.line}></p>
        <Stack size='md' w="md" pt={4} spacing={4} align="center">
        <InputGroup >
            <div>
            <Input  placeholder='Email Address'
             backgroundColor="gray.100" focusBorderColor='grey' type="text" size='md' w="md" className={styles.inputText} required/>
            </div>
        </InputGroup>
        <InputGroup>   
                <Input backgroundColor="gray.100" focusBorderColor='grey' 
                        type='password'
                        placeholder='Enter password'
                        color="black.400"
                />
        </InputGroup>
        <Checkbox spacing={3} defaultChecked>REMEMBER ME</Checkbox>
        <div  style={{textAlign:"right"}}><a href="/forget"  style={{fontSize:"14px",textDecoration:"underline"}}>Forget your password?</a></div>
        <Button mt={5}  backgroundColor="blackAlpha.900" color="white" size="md" w="220px">Login</Button>
        <div  style={{textAlign:"right"}}><a href="/"  style={{fontSize:"12px",textDecoration:"underline"}}>For more information, please consult the Privacy Policy</a></div>
        <p className={styles.line}></p>
        <div  style={{fontWeight:"500",fontSize:"12px"}}>ARE YOU NEW TO YOOX? <a  style={{fontWeight:"500",fontSize:"12px",textDecoration:"underline"}} href="/register">REGISTER NOW</a></div>
        </Stack>
    </Stack>
    
    
    
    </>
  )
}

export default Login