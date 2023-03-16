import { Box, HStack, VStack ,Text,Button, useToast} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentDetains1 = ( {totalMRP,totalMRPDiscount}) => {
  
  return (
   <>
                  <Box w="full">
                <VStack w={"full"} align={"left"} textAlign="left">
                  <Text fontSize={"12px"} fontWeight={"bold"} color={"#535766"}>PRICE DETAILS (2 Items)</Text>
                  <HStack w={"full"} justify={"space-between"}>
                    <Text fontSize={"14px"} color="#282c3f">Total MRP</Text>
                    <Text fontSize={"14px"} color="#282c3f">₹{totalMRP}</Text>
                  </HStack>
                  <HStack w={"full"} justify={"space-between"}>
                    <Text fontSize={"14px"} color="#282c3f">Discount on MRP</Text>
                    <Text fontSize={"14px"} color="#03a685">-₹{totalMRPDiscount}</Text>
                  </HStack>
                  <HStack w={"full"} justify={"space-between"}>
                    <Text fontSize={"14px"} color="#282c3f">Coupon Discount</Text>
                    <Text fontSize={"14px"} color="#03a685">-₹0</Text>
                  </HStack>
                  <HStack w={"full"} justify={"space-between"}>
                    <HStack fontSize={"14px"}>
                      <Text fontSize={"14px"} color="#282c3f">Convenience Fee</Text>
                      <Text fontSize={"14px"} color={"#863e9c"} fontWeight={"bold"}>Know More</Text>
                    </HStack>
                    <HStack>
                      <Text fontSize={"14px"} color="#282c3f" textDecor={"line-through"}>₹99</Text>
                      <Text fontSize={"14px"} color="#03a685">FREE</Text>
                    </HStack>
                  </HStack>
                </VStack>
                  </Box>
              {/* .......................... */}

             
   </>
  )
}
const PaymentDetains2 = ({ totalAmount,totalMRP,totalMRPDiscount,redirect}) => {
  const navigate=useNavigate()
  const toast=useToast()
  return (
   <>
                  <Box w="full">
                <VStack w={"full"} align="flex-start">
                  <HStack w={"full"} justify={"space-between"}>
                    <Text fontSize={"14px"} color={"#3e4152"} fontWeight={"bold"}>
                      TOTAL Amount
                    </Text>
                    <Text fontSize={"14px"} color={"#3e4152"} fontWeight={"bold"}>
                      ₹ {totalAmount}
                    </Text>
                  </HStack>
                  <Button onClick={()=>
                  redirect?navigate(redirect,{state:{totalAmount,totalMRP,totalMRPDiscount}}):
                  toast({
                    title: 'Please check your address.',
                    status: "warning",
                    duration: 2000,  
                    position:"top-right"  
                  })
                  } w="full" colorScheme={"pink"} borderRadius={3} fontSize={"15px"} >
                    PLACE ORDER
                  </Button>
                </VStack>
              </Box>
              {/* .......................... */}

             
   </>
  )
}

export  {PaymentDetains1,PaymentDetains2}