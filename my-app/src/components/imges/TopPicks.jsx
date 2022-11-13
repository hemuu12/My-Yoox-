import {Box,Center,Grid, Stack,Image,Divider} from "@chakra-ui/react" 


function TopPicks ({image,image1,image2,text}){
    return(
        <>
      
        <Box  width="90%" margin="auto" marginTop={10} >
            <Box display="flex" p={2}>
            <h1 style={{fontSize:"30px",paddingBottom:"10px"}}>{text}</h1>
            </Box>
       
       <Stack direction='row' >
        <Grid templateColumns='repeat(3, 1fr)' width="100%" gap={4}>
    <Box  cursor="pointer">         
  <Image
    src={image}
    alt='Dan Abramov' />
 </Box>
 <Box cursor="pointer">
  <Image
    src={image1}
    alt='Dan Abramov'/>
  </Box>
  
   <Box cursor="pointer">
    <Image  src={image2} 
    alt='Dan Abramov' />
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
export default TopPicks