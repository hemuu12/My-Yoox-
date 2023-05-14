import React, { useEffect, useRef, useState } from 'react'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Flex,
  Image,
} from '@chakra-ui/react'
import {Link, NavLink} from "react-router-dom"
import { GrCart } from 'react-icons/gr'
import { CloseIcon ,TriangleDownIcon,EmailIcon } from "@chakra-ui/icons"
import styles from "./navbar.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import {IoSearchSharp} from "react-icons/io5"
const Navbar = () => {
  
  const { loginWithRedirect,logout ,isAuthenticated } = useAuth0()

  const ref = useRef(null)

  const [hiddenDiv, setHiddenDiv] = useState(false)

  // const url = `https://flipkart.dvishal485.workers.dev/search/`

  const [data, setData] = useState([])
  const [searchVal, setSearchVal] = useState("");
  useEffect(()=>{
    fetchData(searchVal)
  },[searchVal])
  
  const fetchData=(searchVal)=>{
    fetch(`https://yoox-server.vercel.app/clothing?_limit=5&q=${searchVal}`)
    .then((res)=>res.json())
    .then((res)=>{
      // setData(res)
      setData(res)
      console.log(res, " search input data after fetched ");
    })
  }

  // const handleinput = (e)=>{
  //   const val = e.target.value
  //   console.log(val, " input box ");
  //   setSearchVal(val)
  // }

  const debounce = (fn, timeout)=>{
    let timerid;
    return ()=>{
      clearTimeout(timerid)
      timerid = setTimeout(() => {
        fn()
      }, timeout);
    }
  }
  const handleinput = debounce(()=>{
    const val = ref.current.value
    console.log(" event val check in debounce ", val);
    setHiddenDiv(true)
    setSearchVal(val)
  }, 500)

  window.addEventListener("click",(e)=>{
    console.log(e.target.id, " check window ");
    if(e.target.id!=="inputBox"){
      setHiddenDiv(false)
    }
  })


  return (
    <>
         {/*  Topnav  */}

      <div className={styles.topnav}>
        <div className={styles.flags}>
            <Menu>
            <MenuButton backgroundColor="white" pr={0} pl={1} fontSize={15} _hover={{textDecoration:"underline"}} as={Button} rightIcon={<TriangleDownIcon w={3} h={2}/>}>
              United States
            </MenuButton>
            <MenuList  mt={-2}>
            <div style={{marginTop:"-9px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"30px",padding:"25px" ,backgroundColor:"lightgrey"}}>
                <h1 style={{fontSize:"17px"}}>SHOP IN</h1>
                <p style={{fontSize:"13px"}}>By changing the location, delivery options of that location will apply and all items will be removed from your Shopping Bag.</p>
                <CloseIcon  w={3} h={3}/> 
              </div>
              <table  style={{display:"flex",gap:"80px",fontSize:"15px",marginTop:'10px'}}>
              <tbody style={{display:"flex",gap:"80px",fontSize:"15px",marginTop:'10px'}}>
              <div style={{marginLeft:"20px"}}>
              <td >
                <tr><Link to="/">UNITED STATES</Link></tr>
                <tr><Link to="/">UNITED KINGDOM</Link></tr>
                <tr><Link to="/">GERMANY</Link></tr>
                <tr><Link to="/">ITALY</Link></tr>
                <tr><Link to="/">ALBANIA</Link></tr>
                <tr><Link to="/">NORWAY</Link></tr>
                <tr><Link to="/">POLAND</Link></tr>
                </td>
              </div>
                <div>
                  <td>
                  <tr><Link to="/">GRECEE</Link></tr>
                  <tr><Link to="/">MONACO</Link></tr>
                  <tr><Link to="/">HUNGARY</Link></tr>
                  <tr><Link to="/">IRELAND</Link></tr>
                  <tr><Link to="/">ISRAEL</Link></tr>
                  <tr><Link to="/">JAPAN</Link></tr>
                  <tr><Link to="/">PANAMA</Link></tr>
                  </td>
                </div>
                <div>
                    <td>
                    <tr><Link to="/">MALAYSIA</Link></tr>
                    <tr><Link to="/">MOROCCO</Link></tr>
                    <tr><Link to="/">KUWAIT</Link></tr>
                    <tr><Link to="/">OMAN</Link></tr>
                    <tr><Link to="/">CANADA</Link></tr>
                    <tr><Link to="/">CYPRUS</Link></tr>
                    <tr><Link to="/">LEBANON</Link></tr>
                    </td>
                </div>
                </tbody>
              </table>
            </div>
            </MenuList>
            </Menu>
        
        </div>
      
        <div className={styles.help}>
            <Menu>
            <MenuButton backgroundColor="white" pr={2} pl={3} fontSize={15} fontWeigth={650} _hover={{textDecoration:"underline"}} as={Button} >
              CUSTOMER CARE
            </MenuButton>
            <MenuList  mt={-2} ml={-100} >
            <div style={{marginTop:"-9px",padding:"7px"}}>
              <div style={{alignItems:"center",gap:"30px",padding:"15px" }}>
                <Heading size="md" align="center" >Can We Help You?</Heading>  
                <Button mt={5} color="white" backgroundColor="blackAlpha.800">GO TO THE CUSTOMER CARE AREA</Button>
                <div style={{marginTop:"10px",textAlign:"center"}}>
                    <Link style={{paddingTop:"10px"}} to="/">TRACK YOUR ORDER</Link>
                    <p className={styles.line1}></p>
                    <Link style={{paddingTop:"20px"}} to="/">COMPLETE THE RETURN FORM</Link>
                    <p className={styles.line1}></p>
                    <Link style={{paddingTop:"20px"}} to="/">TRACK YOUR RETURN</Link>
                    <p className={styles.line1}></p>
                </div>
                <div style={{textAlign:"center",marginTop:'10px'}}>
                  <Heading size="md">CONTACT US</Heading>
                  <p style={{marginTop:"10px"}}>M-F 9am-11pm EST</p>
                </div>
                <div style={{display:"flex",textAlign:"center",marginTop:"20px",alignItems:"center",gap:"5px",marginLeft:"25px"}}>
                  <div style={{padding:"15px"}}>
                    <img style={{width:"25px",marginLeft:"35px"}} src="data:image/png;base64,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" alt="" />
                    <p style={{fontSize:"15px"}}>[ 9917947328 ]</p>
                  </div>
                  <div style={{padding:"15px"}}>
                  <EmailIcon />
                    <p >[ E-mail ]</p>
                  </div>
                </div>
                
                
            </div>
            </div>
            </MenuList>
        </Menu>
        </div>
      
        <div className={styles.Heading}>
        <h1 >FREE STANDARD SHIPPING ON ORDERS OVER $250</h1>
        </div>

        
        <div >
          <Menu>
          <Menu backgroundColor="white" pr={2} pl={6} fontSize={13} fontWeight="800"  _hover={{textDecoration:"underline"}} as={Button} >
          <button onClick={() => loginWithRedirect()}>Register/SignIn</button>
          </Menu>
          <Menu backgroundColor="blue"  ml={6} fontSize={13} fontWeight="800"  _hover={{textDecoration:"underline"}} >
            {
              isAuthenticated===true? <button style={{backgroundColor:"#333",marginLeft:"20px",color:"white",padding:"5px"}} onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </button>:null
            }
          </Menu>
          </Menu> 
        </div>
    
      </div>
 
  {/*  Midnav  */}

  <div className={styles.midnav}>
    <div><Link to="/product">WOMEN</Link></div>
    <div><Link to="/product">MEN</Link></div>
    <div><Link to="/product">KIDS</Link></div>
    <div>
      <div className={styles.logo}><Link to='/'><img src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" alt="logo"/></Link></div>
    </div>
    <div className={styles.search} >

    <Box w="300px" pos={'relative'}>
    <InputGroup>
      <Input
        placeholder="Search for products,brands and more"
        bg="white"
        w="100%"
        borderRadius="2px"
        border="1px solid black"
        h="36px"
        fontSize="14px"
        ref={ref}
        // value={}
        onInput={handleinput}
        id='inputBox'
      />
     
      <InputRightElement
      pos='absolute' zIndex='10'
        children={
          <IoSearchSharp
            color="black"
            cursor="pointer"
            fontSize="23px"
            fontWeight="bold"
          />
        }
      />
    </InputGroup>
    <Box
      display={hiddenDiv?"":"none"}
      pos={'absolute'} zIndex={'10'}
      maxH='320px' overflowY={'auto'}
      borderRadius='0 0 2px 2px'
      borderTop={'1px solid #e0e0e0'}
      w='100%'
      bg='#fff'
      boxShadow={'2px 3px 5px -1px rgb(0 0 0 / 50%)'}
    >
      {
        data.map((item, index)=>(
          <Box key={index}>
            <NavLink to={`/product`}>
              <Flex gap={2} p='10px 25px' m='10px 0'
              align={'center'}
              cursor='pointer'
              _hover={{bg:"#F5F8FF"}}
              // onClick={()=>handleSetQuaryUrl(item.query_url)}
              >
                <Box maxH='70px' w='80px'>
                  <Image width="100%" src=
                  {item.img}
                  // {item.thumbnail}
                  />
                </Box>
                <Box color={'#212121'} width="70%"
                >
                  {item.title}
                  {/* {item.name} */}
                </Box>
              </Flex>
            </NavLink>
          </Box>
        ))
      }
    </Box>
  </Box>



    <div><Link to="/cart"><GrCart  size={20}/></Link></div>     
    </div>
  </div>  

  
   <div className={styles.bottomnav}>
      <Link className={styles.a} to="/product">NEW ARRIVALS</Link>
      <Link className={styles.a}  to="/product">DESIGNERS</Link>
      <Link className={styles.a}  to="/product">CLOTHING</Link>
      <Link className={styles.a}  to="/product">SHOES</Link>
      <Link className={styles.a}  to="/product">ACCESSORIES & BAGS</Link>
      <Link className={styles.a}  to="/product">8 BY YOOX</Link>
      <Link className={styles.a}  to="/product">YOOXYGEN</Link>
      <Link className={styles.a}  to="/product">COLLABORATIONS</Link>
      <Link className={styles.a}  to="/product">BEST DEALS</Link>
      <Link className={styles.a}  style={{backgroundColor:"#ca336e", color:"white",padding:"12px"}} to="/product">GIFT GUIDE</Link>
   </div> 
    </>
  )
}


export default Navbar