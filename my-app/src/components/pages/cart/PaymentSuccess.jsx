
import { Box, Button, VStack,Image } from '@chakra-ui/react';

const PaymentSuccess = () => {


  return (
              <VStack h="100vh" justify="space-between">
              
 <Box w="100%">
         <VStack w={"60%"} m="auto" spacing={16}>
          <Image w="full" src="https://www.knowband.com/blog/wp-content/uploads/2020/03/THANKYOU-PAGE-2.png" />
          <Button 
          variant={"outline"}
         colorScheme="pink"
         fontWeight={"bold"} 
         _hover={{bgColor:"pink"}} 
          >
            CONTINUE SHOPPING
          </Button>
         </VStack>
 </Box>
              </VStack>
  )
}

export default PaymentSuccess




