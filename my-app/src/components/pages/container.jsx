import React from 'react'
import { Box,Badge,Image  } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons"
 
const Container = ({rating,price,image,title,category,discount}) => {

  return (
    <>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="center">
      <Image src={image} alt="" />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {title}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {/* {} beds &bull; {} baths */}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {category}
        </Box>

        <Box>
          {discount}
          <Box as='span' color='gray.600' fontSize='sm'>
          ${price}
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < {rating} ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {/* {property.reviewCount} reviews */}
          </Box>
        </Box>
      </Box>
    </Box>

    </>
  )
}

export default Container