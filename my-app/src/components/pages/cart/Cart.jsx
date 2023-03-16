import { Box, Divider, HStack, SimpleGrid, StackDivider, VStack, Text, Button, Image, Icon, Checkbox, Circle, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
  Center,
  useToast, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { MdOutlineLocalOffer } from "react-icons/md"
import axios from 'axios'
import SingleCartProduct from './SingleCartProduct'
import SingleSimilarProduct from './SingleSimilarProduct'

import AddressModal from './AddressModal'
import  { PaymentDetains1, PaymentDetains2 } from './PaymentDetains'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [addressD,setAddress]=useState({})
  const {name,mobileNo,pinCode,area,town,city,state}=addressD
  const [totalMRP, setTotalMRP] = useState(0)
  const [totalMRPDiscount, setTotalMRPDiscount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(totalMRP - totalMRPDiscount)
  const navigate=useNavigate()
  const Products=useSelector((store)=>store.AppReducer.Products)
  const [similerProducts,setSimilarProducts]=useState([])
  const toast =useToast()





useEffect(()=>{
  axios({
    url:`https://yoox-server.vercel.app/Address`
  }).then(({data})=>setAddress(data))
},[])

  useEffect(() => {
  handleCartProducts()
  }, [cartProducts.length])

const handleCartProducts=()=>{
  axios(({
    method: "get",
    url: `https://yoox-server.vercel.app/cart`
  })).then(({ data }) => setCartProducts(data))

}


const handleAddCart=(el)=>{

  toast({
    title: 'Please wait',
    description:"We are adding your product in cart",
    status: 'loading',
    duration: 500,
    isClosable: true,
    position:"top"
  })

axios({
  url:`https://yoox-server.vercel.app/cart`,
  method:"post",
  data:el,
}).then((res)=>{
    handleCartProducts()
    toast({
          title: 'Product added in the cart.',
          description: el.title,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position:"top"
        })
}).catch((err)=>{
  toast({
    title: 'Product already present in the cart.',
    description:"Title: "+ el.title,
    status: 'warning',
    duration: 3000,
    isClosable: true,
    position:"top"
  })
})
}





useEffect(()=>{
  let obj={}
  for(let el of cartProducts){
    if(!obj[el.category]){
      obj[el.category]=el.category;
    }
    if(!obj[el.id]){
      obj[el.id]=el.id
    }
  }

if(similerProducts.length===0){
  const newArr=Products.filter((el)=>{

  return obj[el.category]&& !obj[el.id]
  })
  setSimilarProducts(newArr)
}


  axios({
    url:`${process.env.port}/clothing`
     }).then((res)=>{
       const newArr=res.data?.filter((el)=>{
          
         return obj[el.category] && !obj[el.id]
          })
         
          setSimilarProducts(newArr)
     })

},[cartProducts.length,Products.length])





  return (
    <VStack minH="120vh" justify={"space-between"}>
     


{
  cartProducts.length===0?<Box>
<Center>
  <VStack>
    <Image w="100px" src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" />
    <Text fontWeight={700} fontSize="20px" color={"424553"}>Hey, it feels so light!</Text>
    <Text fontSize={"14px"} pb="20px" fontWeight={400} color="#7e818c">There is nothing in your bag. Let's add some items.</Text>
    <Button onClick={()=>navigate("/product")} colorScheme={"pink"} variant="outline" borderRadius={"2px"}>Go For Shopping</Button>
  </VStack>
</Center>

  </Box>:
  <Box>
           <Box>
          <HStack
            px={"200px"}
            divider={<StackDivider color={"#ededef"} />}
            alignItems="flex-start"
          >
            {/* ................................. */}
            <Box
              w="65%"
            >
              <VStack
  
              >
                <Box w="full" border={"1px solid #ebebed"} p={4} borderRadius={"7px"}>
                  <HStack
                    justify={"space-between"}
                    w={"full"}
                  >
                      {
                    name? ( <VStack spacing={0} align={"flex-start"} >
                    <HStack w={"full"}>
                      <Text fontSize={"14px"}>Deliver to:</Text><Text fontSize={"14px"} fontWeight={"bold"}>{name}, {pinCode}</Text>
                    </HStack>
  
                    <Text fontSize={"12px"}>{town}, {area},{city},{state}</Text>
                  </VStack>):<Text fontWeight={"bold"} fontSize={"14px"} color="#535766" >Where we need to Deliver !</Text>
                  }
  
                    <Button variant={"outline"} colorScheme="pink" borderRadius={"2px"} size={"sm"} fontSize="13px" onClick={onOpen}>CHANGE ADDRESS</Button>
                    <Modal isOpen={isOpen} onClose={onClose} colorScheme="pink">
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader fontSize={"14px"} color={"#535766"} fontWeight={"bold"}>ADD NEW ADDRESS</ModalHeader>
                        <ModalCloseButton color={"#535766"} fontWeight={"bold"} />
                       <AddressModal onClose={onClose}  setAddress={setAddress}/>
  
                      </ModalContent>
                    </Modal>
                  </HStack>
                </Box>
  
  
                <HStack justify={"left"} spacing={1} w="full" border={"1px solid #ebebed"} p={"5px 5px"} borderRadius={"3px"}>
                  <Image w="32px" src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp"></Image>
                  <Text fontSize={"14px"} pt="7px" color="#626472">Yay!</Text>
                  <Text fontSize={"14px"} pt="7px" fontWeight={"bold"} color="#535766">No convenience fee</Text>
                  <Text fontSize={"14px"} pt="7px" color="#626472">on this order.</Text>
                </HStack>
  
  
                <Box w={"full"}>
                  <VStack w={"full"} mt={8}>
                    {
                      cartProducts?.map((item,i) => {  
                        return <SingleCartProduct key={item.id} {...item} setTotalMRP={setTotalMRP} setTotalAmount={setTotalAmount} setTotalMRPDiscount={setTotalMRPDiscount} handleCartProducts={handleCartProducts} />
                      })
                    }
                  </VStack>
                </Box>
  
                <Box></Box>
              </VStack>
  
  
            </Box>
  
            {/* ................................... */}
            <Box
              w={"35%"}
            >
  
              <VStack
                w={"full"}
                divider={<StackDivider borderColor='gray.200' />}
  
              >
  
                {/* ........................ */}
                <Box w="full">
  
                  <VStack align={"flex-start"} w={"full"} >
                    <Text fontSize={"12px"} color={"#535766"} fontWeight={700}>COUPONS</Text>
                    <HStack justify={"space-between"} w="full">
                      <HStack spacing={"15px"}>
                        <Icon fontSize={"20px"} as={MdOutlineLocalOffer}></Icon>
                        <Text fontSize={"14px"} color="535766" fontWeight={"700"}>Apply Coupons</Text>
                      </HStack>
                      <Button borderRadius={2} px={4} py={3} variant={"outline"} size={"xs"} colorScheme={"pink"}>APPLY</Button>
                    </HStack>
                  </VStack>
  
                </Box>
  
                {/* .......................... */}
                <Box w="full">
  
                  <VStack w={"full"} align="flex-start" textAlign={"left"}>
                    <Text
                      fontWeight={700}
                      fontSize={"12px"}
                      color={"#535766"}
                    >
                      GIFTING & PERSONALISATION
                    </Text>
                    <HStack w={"full"} px={2} bgColor="#eecdfa" borderRadius={5} >
                      <Box w={"45px"}>
                        <Image w={"full"} src='https://constant.myntassets.com/checkout/assets/img/gift-big.webp' alt="">
  
                        </Image>
                      </Box>
                      <VStack spacing={"3px"} py={2} w={"full"} textAlign={"left"} align="flex-start">
                        <VStack w={"full"} textAlign={"left"} align="flex-start" spacing={"0px"}>
                          <Text fontSize={"14px"} fontWeight={"bold"} color="#282c3f">Buying for a loved one?</Text>
                          <Text fontSize={"12px"} fontWeight={400} color="#282c3f">Gift wrap and personalised message on card, Only for ₹25</Text>
                        </VStack>
                        <Text fontSize={"12px"} fontWeight={600} color={"#360729"}>ADD GIFT WRAP</Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
  
                {/* .......................... */}
                <Box w="full">
                  <VStack w="full" spacing={4} textAlign={"left"} align="flex-start">
                    <Text
                      fontWeight={700}
                      fontSize={"12px"}
                      color={"#535766"}
                    >SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</Text>
                    <Checkbox colorScheme={"pink"} color="#282c3f" size={"sm"} spacing={3} fontWeight={600}>Support Us</Checkbox>
                    <HStack fontSize={"14px"}>
                      <Circle color={"#282c3f"} fontWeight={700} border={"1px solid #e2e3e6"} borderRadius={"30px"} cursor={'pointer'} p="8px 16px" _hover={{ background: "#f6ccff" }}>₹10</Circle>
                      <Circle color={"#282c3f"} fontWeight={700} border={"1px solid #e2e3e6"} borderRadius={"30px"} cursor={'pointer'} p="8px 16px" _hover={{ background: "#f6ccff" }}>₹50</Circle>
                      <Circle color={"#282c3f"} fontWeight={700} border={"1px solid #e2e3e6"} borderRadius={"30px"} cursor={'pointer'} p="8px 16px" _hover={{ background: "#f6ccff" }}>₹100</Circle>
                      <Circle color={"#282c3f"} fontWeight={700} border={"1px solid #e2e3e6"} borderRadius={"30px"} cursor={'pointer'} p="8px 16px" _hover={{ background: "#f6ccff" }}>Other</Circle>
                    </HStack>
                    <Text fontSize={"14px"} color={"#863e9c"} fontWeight={"bold"}>Know More</Text>
                  </VStack>
                </Box>
                {/* .......................... */}
  
                <PaymentDetains1  totalMRP={totalMRP} totalMRPDiscount={totalMRPDiscount}  />
                {/* .......................... */}
                <PaymentDetains2 totalAmount={totalAmount} totalMRP={totalMRP} totalMRPDiscount={totalMRPDiscount} redirect={pinCode?"/address":undefined}/>
  
              </VStack>
  
            </Box>
          </HStack>
        </Box>
  
        <Box w="full" px={"200px"} mt={"70px"} textAlign={"left"} >
          <Box bgColor={"#fff6f8"} p={2} >
            <Divider borderColor={"black"} />
            <Text p={2} color={"#282c3f"} fontWeight="bold">You may also like</Text>
            <SimpleGrid w="full" columns={4} spacing={"20px"}>
              {
                similerProducts?.map((el) => {
          
                  return <Box key={el.id} bgColor={"#fff"}>
                    <SingleSimilarProduct  el={el} handleAddCart={handleAddCart} />
                  </Box>
                })
              }
            </SimpleGrid>
          </Box>
        </Box>
  </Box>
}
 


    </VStack>
  )
}

export default Cart