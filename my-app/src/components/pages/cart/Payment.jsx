import { Box, Button, HStack, VStack,Input,Image,Text, FormControl,FormLabel,Center, Spinner,Modal, ModalOverlay, ModalContent,ModalBody,useDisclosure, Heading, useToast } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import warning from "../../imges/warning.png"


const Payment = () => {
  const location=useLocation()
  const {totalAmount,totalMRP,totalMRPDiscount}=location.state
  const expiryRef=useRef({month:"",year:""})
  const paymentRef=useRef({name:"",cardNm:"",cvc:""})
  const [check,setCheck]=useState({isloading:false,status:false})
  const {isloading,status}=check
  const navigate=useNavigate()
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const toast = useToast()
 let t1;



  
  const handlePayment=()=>{
    const {month,year}=expiryRef.current
    const {name,cardNm,cvc}=paymentRef.current
    const currentYear=new Date().getFullYear()
    setCheck((prev)=>({...prev,isloading:true}))
   

    
  if(
  name.length>2&& +name!=name&&cardNm.length===12&& +cardNm==cardNm && +cardNm>9999999999&&cvc.length>2&& +cvc==cvc&&
  +cvc>99&&+month &&+month<13&&currentYear<= +year&& +year-currentYear<10
  ){
    
   



setTimeout(()=>{
  setCheck((prev)=>({...prev,status:true,isloading:false}))
  toast({
    title: 'Payment successful.',
    description: "We've received your payment.",
    status: 'success',
    duration: 3000,
    isClosable: true,
    position:"top"
  })
},[1500])
  }else{
    setTimeout(()=>{
      setCheck((prev)=>({...prev,status:false,isloading:"error"}))
    },[1000])

    t1=setTimeout(()=>{
      setCheck((prev)=>({...prev,status:false,isloading:false}))
    },[5000])
  }
  }

const handleErrorMenu=()=>{
  clearTimeout(t1)
  setCheck((prev)=>({...prev,status:false,isloading:false}))

}
  return (
 <>

{
  isloading==="error"?(
    <Box h={"75vh"} w="100%">
    <Center height="100%">
    <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
         
          <ModalBody>
           <Center w="100%" h="full" >
              <VStack>
                <Image src={warning} boxSize={"150px"}></Image>
                <Heading as={"h1"}>Oops!</Heading>
                <Heading as="h3" fontSize={"20px"}>Your card was declined.</Heading>
                <Text>Please <span onClick={handleErrorMenu} style={{color:"blue",cursor:"pointer"}}> go Back </span>and fix this...</Text>
              </VStack>
           </Center>
          </ModalBody>   
        </ModalContent>
      </Modal>
    </Center>
   </Box>
  ):isloading? (
    <Box h={"75vh"} w="100%">
   <Center height="100%">
   <Spinner
     thickness="4px"
     size="xl"
     color="pink.500"
     speed="0.95s"
    />
   </Center>
    </Box>
  ):status?(
    <Box h="75vh">
    <Center w="full" h="full">
         <VStack w="full" spacing={8}>
         <Image  width={"50%"} src={"https://www.knowband.com/blog/wp-content/uploads/2020/03/THANKYOU-PAGE-2.png"}></Image>
           <Button onClick={()=>navigate("/")} colorScheme={"pink"}>Continue Shopping</Button>
         </VStack>
    </Center>
    </Box>
  ):(
    <Box my={"25px"} py={"25px"} minH={"70vh"}>
    <Center>
    <VStack width={"27%"} p={"30px"} borderRadius={"10px"} spacing={8}   bgColor={"rgba(229,229,229,0.3)"}>
           <Box w="80px">
            <Image w={"full"} src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"></Image>
           </Box>
         
           <FormControl isRequired w={"full"}>
           <VStack spacing={"19px"} w="full">
           <HStack spacing={"24px"}>
                  <VStack align={"flex-start"} w="75%" spacing={"8px"}>
                      <FormLabel>CARD NUMBER</FormLabel>
                      <Input defaultValue={paymentRef.current.cardNm} onChange={(e)=>paymentRef.current.cardNm=e.target.value} focusBorderColor='#b8c5e6' bgColor={"#f0f0f0"}  maxLength={"12"} minLength={12}  placeholder='7419 9412 5910 9218' />
                  </VStack>
                  <VStack align={"flex-start"} w="25%" spacing={"8px"}>
                      <FormLabel>CVC</FormLabel>
                      <Input defaultValue={paymentRef.current.cvc} onChange={(e)=>paymentRef.current.cvc=e.target.value} focusBorderColor='#b8c5e6' bgColor={"#f0f0f0"}  maxLength={4} minLength={3} placeholder='253' />
                  </VStack>
             </HStack>
             <VStack w={"full"} align={"flex-start"} spacing={"8px"}>
               <FormLabel>CARD HOLDER NAME</FormLabel>
                <Input defaultValue={paymentRef.current.name} onChange={(e)=>paymentRef.current.name=e.target.value} focusBorderColor='#b8c5e6' bgColor={"#f0f0f0"}  placeholder='User Name' maxLength={50} minLength={2} />
             </VStack>
  
             <VStack align={"flex-start"} spacing={"8px"}>
             <FormLabel>EXPERITION DATE</FormLabel>
             <HStack>
              <Input  defaultValue={expiryRef.current.month} onChange={(e)=>expiryRef.current.month=e.target.value}   focusBorderColor='#b8c5e6' bgColor={"#f0f0f0"}  placeholder='12' maxLength={2}></Input>
              <Input  defaultValue={expiryRef.current.year}  onChange={(e)=>expiryRef.current.year=e.target.value}  focusBorderColor='#b8c5e6' bgColor={"#f0f0f0"}  placeholder='2027' maxLength={4} minLength={4}></Input>
             </HStack>
             </VStack>
             <Box py={"15px"} w="full">
             <Button colorScheme={"facebook"} w="100%" onClick={handlePayment}>Pay {totalAmount} </Button>
             </Box>
           </VStack>
          </FormControl>
  
      </VStack>
    </Center>
   </Box>
  )

  

}

 </>
  )
}

export default Payment