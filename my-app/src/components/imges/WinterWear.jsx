import {Box,Center,Grid, Stack,Image,Divider} from "@chakra-ui/react" 


function WinterWear (){
    return(
        <>
      
        <Box  width="90%" margin="auto" marginTop={20} >
            <Box display="flex" p={2}>
            <h1 style={{fontSize:"30px",paddingBottom:"10px"}}>Winterwear Essentials</h1>
            </Box>
       
       <Stack direction='row' >
        <Grid templateColumns='repeat(6, 1fr)' width="100%" gap={4}>
    <Box cursor="pointer">         
  <Image
   
    objectFit='cover'
    src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner1-08Nov2022.jpg'
    alt='Dan Abramov'
  />
  <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹999</p>
 </Box>
 <Box cursor="pointer">
  <Image
   
    objectFit='cover'
    src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner2-08Nov2022.jpg'
    alt='Dan Abramov'
  />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹5999</p>
  </Box>
  
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner3-08Nov2022.jpg' 
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹1999</p>
    </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner5-08Nov2022.jpg'
    alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹4999</p>
   </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner4-08Nov2022.jpg'
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹3999</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner6-08Nov2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>From ₹2999</p>
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
export default WinterWear