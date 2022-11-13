import React,{useContext} from "react";
import {Table,Thead,Tbody,Img,Tfoot,Tr,Th,Td,TableCaption,TableContainer,Box,Button,Center,AlertDialog,
AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter, useDisclosure} from "@chakra-ui/react"
import { CartContext } from "../cartx/cartprovider";
import {checkOut,removeFromCart} from "../cartx/action"

const Cart = () => {
  const {state,dispatch} = useContext(CartContext);
  const {isOpen,onOpen,onClose} = useDisclosure();
  const cancelRef = React.useRef();
  
const handleCheckout = () =>{
  dispatch(checkOut());
  onClose()
}

    return(



      <Box>
        <TableContainer mt={{base:20, sm:20, md:28, lg:32}}>
        <Table 
        variant="simpel"
        colorScheme="grey"
        size={{base:"sm", sm:"sm", md:"md", lg:"lg"}}
        >
          <TableCaption>No Exchange | No Refunds</TableCaption>
          <Thead>
            <Tr>
            <Th fontSize={{base:"xs", md:"md"}}>image</Th>
              <Th fontSize={{base:"xs", md:"md"}}>Product</Th>
              <Th fontSize={{base:"xs", md:"md"}}>Price (INR)</Th>
              <Th fontSize={{base:"xs", md:"md"}}>Remove From Cart</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state.map((cartItem) =>(
              <Tr key={cartItem.id}> 
              <Td fontSize={{base:"xs",md:"md"}}><Img w="150px" src={cartItem.images[0]} alt="" /></Td>
              <Td fontSize={{base:"xs",md:"md"}}>{cartItem.title}</Td>
              <Td fontSize={{base:"xs",md:"md"}}>₹{cartItem.strike_price}</Td>
              <Td fontSize={{base:"xs",md:"md"}}>
                <Button onClick={()=>dispatch(removeFromCart(cartItem.id))}>Remove From Cart</Button>
              </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th fontSize={{base:"xs", md:"md"}}>Final Price</Th>
              <Th>₹{Math.round(state.reduce((a,c)=> a + c.strike_price ,0))}</Th>
            </Tr>
          </Tfoot>
        </Table>
        </TableContainer>

        <Center mt={{base:4, md:8}}>
              <Button variant="outline" colorScheme="grey" onClick={onOpen}>Place Order</Button>

              <AlertDialog 
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}>
                <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">Place Order
                  </AlertDialogHeader>

                  <AlertDialogBody>Are You sure you want to place this order</AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="red" onClick={handleCheckout} ml={3}>Yes</Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
        </Center>
      </Box>
    )
};

export default Cart;
