import { Box ,HStack,VStack,StackDivider,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton, Text, Tag, Button, Image, Grid, useDisclosure} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PaymentDetains1, PaymentDetains2 } from './PaymentDetains'
import AddressModal from './AddressModal'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const Address = () => {
  const [addressD,setAddress]=useState({})
  const {name,mobileNo,pinCode,area,town,city,state}=addressD
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location=useLocation()
const {totalAmount,totalMRP,totalMRPDiscount}=location.state

useEffect(()=>{
  axios({
    url:`https://yoox-server.vercel.app/Address`
  }).then(({data})=>setAddress(data))
},[])

  return (
    <Box>
              
              <Box my={"25px"} py={"25px"}>
        <HStack
          px={"200px"}
          divider={<StackDivider color={"#ededef"} />}
          alignItems="flex-start"
        >
          {/* ................................. */}
          <Box
            w="65%"
          >
          
<VStack w="full" align={"flex-start"} spacing="20px">
              <HStack w={"full"} justify={"space-between"}>
                          <Text color={"#282c3f"} fontWeight={"bold"}>Select Delivery Address</Text>
                          <Button variant={"outline"} fontSize={"12px"} size="sm" colorScheme="blackAlpha" color="#424553"   onClick={onOpen}  >ADD NEW ADDRESS</Button>
              </HStack>
              <Text color="#535766" fontSize={"12px"} fontWeight="bold">DEFAULT ADDRESS</Text>
              <VStack spacing={"15px"} borderRadius={"5px"} boxShadow={"rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"} p={8} w='full' align={"flex-start"}>
                            <HStack textAlign={"left"}>
                                 <Text fontSize={"14px"} color="#282c3f" fontWeight={"bold"}>{name}</Text>
                                 <Tag fontSize={"10px"} color="#03a685" colorScheme={"gray"} borderRadius="25%" fontWeight="bold">OFFICE</Tag>
                            </HStack>
                         <VStack align="flex-start" fontSize={"13px"} color="#424553" fontWeight={"400"} spacing={0}>
                            <Text>{town},{area}-{city}</Text>
                            <Text>{city},{state} - {pinCode}</Text>
                         </VStack>
                         <HStack fontSize={"13px"} color="#424553">
                         <Text>Mobile:</Text>
                            <Text color={"#424553"} fontWeight={"bold"}>{mobileNo}</Text>
                         </HStack>

                        <Text  fontSize={"13px"} color="#424553">&#x2022; Pay on Delivery available!</Text>
                         <Button  onClick={onOpen} variant={"outline"} fontSize={"12px"} size="sm" colorScheme="blackAlpha" color="#424553">
                            EDIT ADDRESS
                         </Button>
                         <Modal isOpen={isOpen} onClose={onClose} colorScheme="pink">
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader fontSize={"14px"} color={"#535766"} fontWeight={"bold"}>ADD NEW ADDRESS</ModalHeader>
                        <ModalCloseButton color={"#535766"} fontWeight={"bold"} />
                       <AddressModal onClose={onClose}  setAddress={setAddress}/>
  
                      </ModalContent>
                    </Modal>

              </VStack>
</VStack>

          </Box>

          {/* ................................... */}
          <Box
            w={"35%"}
          >
      <VStack
       w={"full"}
       divider={<StackDivider borderColor='gray.200' />}
       spacing="30px"
      >
     {/* ........................... */}

  
     {/* ....................... */}
     <HStack>
<Image w="35px" boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 2px 0px;"} height={"50px"} src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg/" />
<HStack>
<Text>
              Estimated delivery by
</Text>
<Text fontWeight={"bold"}>
              10 jun 2023
</Text>
</HStack>
     </HStack>
     {/* ........................... */}
     <PaymentDetains1  totalMRP={totalMRP} totalMRPDiscount={totalMRPDiscount}  />
                {/* .......................... */}
                <PaymentDetains2 totalAmount={totalAmount} totalMRP={totalMRP} totalMRPDiscount={totalMRPDiscount} redirect={pinCode?"/payment":undefined} />
     {/* ........................... */}

      </VStack>
            

          </Box>
        </HStack>
      </Box>
            
              
    </Box>

  )
}

export default Address