import {Stack,Checkbox,Heading,Button,Input,InputGroup,InputRightElement,Radio, RadioGroup } from "@chakra-ui/react"
import styles from "../user login/signup.module.css"
import { useState } from "react"
// import {Link} from "react-router-dom"

const Signup = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

  return (
    <>
        <Stack align="center" justify="center" backgroundColor="gray.200" pb="30px">
        <p className={styles.border} ></p>
        <div style={{textAlign:"center"}}>
            <Heading size="sm" pt={2}>MYOOX</Heading>
            <Heading color="grey"  size="sm" pt={1}>REGISTRATION</Heading>
            <Heading size="100px" pt={4}  ml={8}>Take advantage of a faster checkout and enjoy promotions for registered customers only</Heading>
            <div style={{fontSize:"14px",textDecoration:"underline",fontWeight:"700"}}><a href="/">Discover all the benefits</a></div>
        </div>
        </Stack>
        <Stack align="center" justify="center" mt={15}>
            <Heading color="grey" as='h6' mt={15} size='sm'>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</Heading>
            <Stack  w="md" margin="auto">
            <Button  className={styles.login}>
                <div className={styles.onOver}>
                    <div className={styles.overtext}>REGISTER WITH FACEBOOK</div>
                </div>
            </Button>  
            <Button className={styles.google}>
                <div className={styles.googleon}>
                    <div className={styles.googletext}>REGISTER WITH GOOGLE</div>
                </div>
            </Button>
            </Stack>
            <Heading color="grey" as='h6' paddingTop="40px" fontWeight="500" size='sm'>OR WITH YOUR EMAIL</Heading>
            
            <Stack size='md' w="md" pt={8} spacing={4}>

            <InputGroup >
            <div>
            <Input backgroundColor="gray.100" focusBorderColor='grey' type="text" size='md' w="md" className={styles.inputText} required/>
             <span className={styles.floatinglabel}>First Name</span>
            </div>
           </InputGroup>
           <InputGroup >
            <div>
            <Input backgroundColor="gray.100" focusBorderColor='grey' type="text" size='md' w="md" className={styles.inputText} required/>
             <span className={styles.floatinglabel}>Last Name</span>
            </div>
           </InputGroup>
           <InputGroup >
            <div>
            <Input backgroundColor="gray.100" focusBorderColor='grey' type="text" size='md' w="md" className={styles.inputText} required/>
             <span className={styles.floatinglabel}>Your email address</span>
            </div>
           </InputGroup>
            <InputGroup>   
                <Input backgroundColor="gray.100" focusBorderColor='grey' 
                        className={styles.inputText} 
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        color="black.400"
                />
                <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' border="none" color="black" colorScheme="white"  onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
                </InputGroup>
            <Heading pt="10px" fontSize="12px" fontWeight="400"  font="italic">Personalize your shopping experience.</Heading>
            <RadioGroup defaultValue='2'>
                <Stack spacing={150} direction='row'>
                    <Radio colorScheme='black' value='1'>
                    Female
                    </Radio>
                    <Radio colorScheme='black' value='2'>
                    Male
                    </Radio>
                </Stack>
            </RadioGroup>
            <Heading pt="10px" fontSize="12px" fontWeight="400"  font="italic">If you are over 18 years old, celebrate your birthday with us: We have a surprise for you.</Heading>
            <InputGroup >
            <div>
            <Input backgroundColor="gray.100" focusBorderColor='grey' type="Date" size='md' w="md" className={styles.inputText} required/>
             <span className={styles.floatinglabel}>Date of Birth</span>
            </div>
           </InputGroup>
           <Heading backgroundColor="gray.100" p="5px" pl="15px" pt="5px"  fontFamily="SourceSansProBold,sans-serif" fontSize="12px" fontWeight="400" >I declare that I have read and accept the <a href="/">MYOOX Terms and Conditions of Use</a> </Heading>
           <Checkbox backgroundColor="gray.100" p="5px" pl="15px" pt="7px" lineHeight="17px" fontFamily="SourceSansProBold,sans-serif" spacing={8} defaultChecked>I agree to the use of my personal data in order to be updated on new arrivals, informed about exclusive items and contacted as part of targeted marketing initiatives related to services offered by YOOX.
            By analyzing my personal data, order history and browsing habits, YOOX can improve my shopping experience with suggestions that correspond to my interests.
            For further information, please consult the Privacy Policy.</Checkbox>
            <Button mt={5} backgroundColor="blackAlpha.900" color="white" size="md">Register</Button>
            </Stack>
        </Stack>
    </>
  )
}

export default Signup