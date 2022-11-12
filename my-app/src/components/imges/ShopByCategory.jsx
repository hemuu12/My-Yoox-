import {Box,Center,Grid, Stack,Image,Divider} from "@chakra-ui/react" 


function ShopByCategory (){
    return(
        <>
       
        <Box  width="90%" margin="auto" marginTop={20} >
            <Box display="flex" p={2}>
            <h1 style={{fontSize:"30px",paddingBottom:"10px"}}>Shop By Category</h1>
            </Box>
       
       <Stack direction='row' >
        <Grid templateColumns='repeat(6, 1fr)' templateRows='repeat(2,1fr)' width="100%" gap={4}>
    <Box cursor="pointer">         
  <Image
   
    objectFit='cover'
    src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-1-Desktop-Men-24Aug2022.jpg'
    alt='Dan Abramov'
  />
  <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹199</p>
 </Box>
 <Box cursor="pointer">
  <Image
   
    objectFit='cover'
    src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-2-Desktop-Men-24Aug2022.jpg'
    alt='Dan Abramov'
  />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹299</p>
  </Box>
  
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-3-Desktop-Men-24Aug2022.jpg' 
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹1299</p>
    </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-4-Desktop-Men-24Aug2022.jpg'
    alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹399</p>
   </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-5-Desktop-Men-24Aug2022.jpg'
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹899</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-6-Desktop-Men-24Aug2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹1499</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-7-Desktop-Men-24Aug2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 30% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-8-Desktop-Men-24Aug2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹799</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Men-24Aug2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹699</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-10-Desktop-Men-24Aug2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹199</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-11-Desktop-Men-24Aug2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹399</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-12-Desktop-Men-24Aug2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹499</p>
   </Box>
  </Grid>
</Stack>
      
        </Box>
        <Center>
    <Divider orientation='horizontal' p={8} width="87%"  color="black"/>
    </Center>
   
        </>
    )
}
export default ShopByCategory