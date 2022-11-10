import React from 'react'
import styles from "../user login/signup.module.css"
import { Heading,Stack,HStack,Input,RadioGroup,Radio,Checkbox ,Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {EmailIcon} from "@chakra-ui/icons"
import {FaFacebook,FaTwitter } from 'react-icons/fa';
import {AiOutlineInstagram ,AiOutlineTablet} from 'react-icons/ai';
import {BsYoutube } from 'react-icons/bs';
import {GrPinterest  } from 'react-icons/gr';

const Footer = () => {
  return (
    <>
        <div style={{display:'flex',gap:'50px',textAlign:"center",paddingTop:'20px',paddingLeft:"150px",backgroundColor:"lightgrey"}}>
            <div>
                <Heading size="sm" >NEW TO YOOX</Heading>
                <p style={{marginBottom:"10px"}} className={styles.line3}></p>
                <div style={{width:"80%",textAlign:"center",marginLeft:"15px",fontSize:"13px"}}>
                    <p style={{marginBottom:"10px"}}><Link to="/">Shopping guide</Link></p>
                    <p style={{marginBottom:"10px"}}><Link to="/">iPhone/iPad/Android</Link></p>
                    <p style={{marginBottom:"10px"}}><Link to="/">Browse all Designers</Link></p>
                    <p style={{marginBottom:"10px"}}><Link to="/">Browse all Categories</Link></p>
                </div>
               
            </div>
                <div>
                    <Heading size="sm">HELP</Heading>
                    <p style={{marginBottom:"10px"}} className={styles.line3}></p>
                        <div style={{width:"80%",textAlign:"center",marginLeft:"15px",fontSize:"13px"}}>
                            <p style={{marginBottom:"10px"}}><Link to="/">Shipping times & costs</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Payments and web security</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Product quality</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Track your order</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Returns & refunds</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">FAQs</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Size Guide</Link></p>
                        </div>
                    
                </div>
                <div style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",backgroundColor:"white",width:"24%" ,padding:'20px',textAlign:"center",justifyContent:"center",paddingTop:'20px'}}>
                    <Stack>
                        <EmailIcon w={6} h={6} m="auto"/>
                        <Heading size="md">YOOX NEWS</Heading>
                        <p style={{width:"75%",fontSize:'14px',margin:"auto",marginTop:"15px",textAlign:"center",color:"#333", fontFamily: "Montserrat,sans-serif"}}>Sign up for the newsletter and discover the latest arrivals and promotions</p>
                        <Input type="email" placeholder='INSERT YOUR E-MAIL ADDRESS'  />
                        <div style={{marginLeft:"20px",paddingTop:"8px"}}>
                            <RadioGroup defaultValue='1' m="auto">
                                <Stack spacing={50} direction='row'>
                                    <Radio colorScheme='black' value='1'>
                                    Female
                                    </Radio>
                                    <Radio colorScheme='black' value='2'>
                                    Male
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                        </div>
                        <div>
                        <Checkbox w="90%" backgroundColor="gray.100" p="10px" size="sm" pl="15px" pt="7px" textAlign="left" lineHeight="17px" fontFamily="SourceSansProBold,sans-serif" spacing={5} defaultChecked>I consent to receive YOOX newsletters via email. For further information, please consult the <a style={{textDecoration:"underline"}} href="/">Privacy Policy.</a> </Checkbox>
                        </div>
                        <Stack direction='row' spacing={4} >
                            <Button backgroundColor="#333" color="white" variant='solid' w="200px" ml={5} mt={2} border="1px solid"> 
                            {/* isLoading */}
                                Email
                            </Button>
                        </Stack>

                    </Stack>
                </div>
                <div>
                    <Heading size="sm">MYOOX</Heading>
                    <p style={{marginBottom:"10px"}} className={styles.line3}></p>
                        <div style={{width:"80%",textAlign:"center",marginLeft:"15px",fontSize:"13px"}}>
                            <p style={{marginBottom:"10px"}}><Link to="/">Shipping times & costs</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Payments and web security</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Product quality</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Track your order</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Returns & refunds</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">FAQs</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Size Guide</Link></p>
                        </div>
                    
                </div>
                <div>
                    <Heading size="sm">ABOUT US</Heading>
                    <p style={{marginBottom:"10px"}} className={styles.line3}></p>
                        <div style={{width:"80%",textAlign:"center",marginLeft:"15px",fontSize:"13px"}}>
                            <p style={{marginBottom:"10px"}}><Link to="/">Company Info</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Press</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Affiliation</Link></p>
                            <p style={{marginBottom:"10px"}}><Link to="/">Carrers</Link></p>
                        </div>
                </div>  
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"250px",backgroundColor:"lightgrey",marginTop:"3px"}}>
            <div style={{display:"flex",alignItems:"center",paddingLeft:"70px"}}>
               <p>CONNECT WITH US</p>
               <div>
               <HStack ml={1} >
                        <Button backgroundColor="lightgrey" leftIcon={<FaFacebook />}>
                        </Button>
                        <Button backgroundColor="lightgrey" leftIcon={<FaTwitter />}>
                        </Button>
                        <Button backgroundColor="lightgrey" leftIcon={<AiOutlineInstagram />}></Button>
                        <Button backgroundColor="lightgrey" leftIcon={<BsYoutube/>}></Button>
                        <Button backgroundColor="lightgrey" leftIcon={<GrPinterest/>}></Button>
                </HStack>
               </div> 
            </div>
            <div style={{display:"flex",alignItems:"center",paddingTop:"1px"}}>
                <Button backgroundColor="lightgrey" leftIcon={<AiOutlineTablet />}></Button>
                <p>DOWNLOAD THE APP FOR iOS / ANDROID</p>
            </div>
        </div>
        <div style={{paddingTop:'50px',textAlign:"center",fontSize:"14px",height:"150px",backgroundColor:"#333",color:"white"}}>
                <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/I/526</p>
                <p style={{color:"lightgrey",fontSize:"13px",marginTop:"5px"}}>LEGAL AREA / PRIVACY POLICY</p>
        </div>

    </>
  )
}

export default Footer