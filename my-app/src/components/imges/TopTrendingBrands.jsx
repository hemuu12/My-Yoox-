import {Box,Center,Grid, Stack,Image,Divider} from "@chakra-ui/react" 


function TopTrendingBrands (){
    return(
        <>
      
        <Box  width="90%" margin="auto" marginTop={20} >
            <Box display="flex" p={2}>
            <h1 style={{fontSize:"30px",paddingBottom:"10px"}}>Top Trending Brands</h1>
            </Box>
       
       <Stack direction='row' >
        <Grid templateColumns='repeat(6, 1fr)' templateRows='repeat(2,1fr)' width="100%" gap={4}>
    <Box cursor="pointer">         
  <Image
   
    objectFit='cover'
    src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner1-22Oct2022.jpg'
    alt='Dan Abramov'
  />
  <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
 </Box>
 <Box cursor="pointer">
  <Image
   
    objectFit='cover'
    src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner2-22Oct2022.jpg'
    alt='Dan Abramov'
  />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 70% Off</p>
  </Box>
  
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner3-22Oct2022.jpg' 
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
    </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner4-22Oct2022.jpg'
    alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
   </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner5-22Oct2022.jpg'
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 20% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner6-27Oct2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 50% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner7-22Oct2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 30% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner8-22Oct2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 60% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner9-22Oct2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 55% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner10-22Oct2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner11-22Oct2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner12-22Oct2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 50% Off</p>
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
export default TopTrendingBrands