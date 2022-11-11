import React from 'react'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  Heading,
} from '@chakra-ui/react'
import {Link} from "react-router-dom"

import { CloseIcon ,TriangleDownIcon,EmailIcon ,Search2Icon } from "@chakra-ui/icons"
import styles from "../user login/signup.module.css"


const Navbar = () => {
  


  return (
    <>
  <div style={{display:"flex",alignItems:"center", border:"1.5px solid lightgrey", paddingLeft:"120px"}}>
  <Menu>
  <MenuButton backgroundColor="white" pr={2} pl={3} fontSize={13} _hover={{textDecoration:"underline"}} as={Button} rightIcon={<TriangleDownIcon w={3} h={2}/>}>
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
    <tbody>
    <div style={{marginLeft:"20px" }}>
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
  <Menu>
  <MenuButton backgroundColor="white" pr={2} pl={3} fontSize={12} fontWeigth={600} _hover={{textDecoration:"underline"}} as={Button} >
    CUSTOMER CARE
  </MenuButton>
  <MenuList  mt={-2} ml={-100} >
  <div style={{marginTop:"-9px",padding:"20px"}}>
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
  <Heading ml={120} size="esm" >FREE STANDARD SHIPPING ON ORDERS OVER $250</Heading>
  <div style={{marginLeft:"80px"}}>
    <Menu>
    <Menu backgroundColor="white"  pl={25} fontSize={12}  _hover={{textDecoration:"underline"}} as={Button} >
      <Link style={{fontSize:"10",fontWeight:"600",marginLeft:"70px"}} _hover={{textDecoration:"underline" }} to="/signup">REGISTER</Link>
    </Menu>
    </Menu>
    <Menu>
    <Menu backgroundColor="white" pr={2} pl={6} fontSize={12}  _hover={{textDecoration:"underline"}} as={Button} >
      <Link style={{fontSize:"10",fontWeight:"600",marginLeft:"40px"}} _hover={{textDecoration:"underline" }} to="/login">LOGIN</Link>
    </Menu>
    </Menu> 
  </div>
 
  </div>
  <div style={{display:"flex",gap:"25px",textAlign:"center",border:"1px solid black",fontSize:"14px",fontWeight:"650",alignItems:"center",paddingLeft:"140px"}}>
    <div><Link to="/product">WOMEN</Link></div>
    <div><Link to="/product">MEN</Link></div>
    <div><Link to="/product">KIDS</Link></div>
    <p>/</p>
    <div><Link to="/">DESIGN-ART</Link></div>
    <div>
      <div style={{width:"80px",height:"60px",marginLeft:"170px",marginTop:"13px"}}><img src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" alt="logo"/></div>
    </div>
    <div style={{display:"flex",gap:"65px",alignItems:"center",marginLeft:"170px"}}>
    <div><Search2Icon  w={15} h={10}/></div>
    <div><Link to="/product"><img style={{width:"22px",height:"22px"}} src="data:image/png;base64,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" alt="" /></Link></div>
    <div><Link to="/cart"><img style={{width:"22px",height:"22px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAADqCAMAAAAGRyD0AAAAkFBMVEX///8AAADt7e3u7u7s7Oz4+Pj8/Pzx8fH19fX6+vrz8/P+/v7v7+/Nzc3a2tpfX1+jo6OWlpZcXFwgICDDw8O2trZkZGRWVlbV1dXk5OScnJyJiYnl5eVBQUGvr6+8vLw4ODhMTEyBgYF1dXUbGxsnJycLCwszMzODg4N5eXlsbGwmJiZPT081NTUTExOPj48UCN3BAAAWm0lEQVR4nN1da1vrqhLGJBBC0lq1alt7sS7vy63//9+dQC4MtwTSuNoe9ofNM2a9ZRJghuFlQKgsJIrjiPIai8taXlbyUhQzLqL8j4TXuCjlFcxFGa8VpajglYyLMK+lHKJBjcunssn24Xpz8/p68fr89vWxuk0aiKGoHm1Fv6hXzFiye3i5MMvndp3S4kz1Qsn8j0WnunzN1gL+H+kVgWcj7dmkrHi0oKzxnka3j26tRPlYhqP6thWRsmRpWSivUV7jFaKKskbEeAW3IsZFeSPCjShFdHbToxUvf5YoD0DN/duKorJUryuJokS8rrgUVa+Li+rXVdZ4Jeei+nWVtVy88bJWvS7+R/G6trZRZStPywDUxLutEYp/oXuvrz21Ksvzzn/Q+A/FeHy9crT114qXT/obesl+yGvtt42rZ8ui9kPC+4LsMUjtMRwLf4apdXHxdypa0YWq98O+tkaI8oJ5USqdIuoWkeV/oWqVZYu6UX0bJkXI6yNYXleiva6kel3Tb1u7N++r7XyymOxmV9evtgdW3aghHSb5Dbu8MJv832xBMGXiH6KU0my5uzOf+jllfyM31Hp94PM4VVDLH8puDZv98xt6md827+yHrfkoYI9Jp1pbn6/WuQM13+21h2cosqImvf3Q1lbEykKzsmBew7xG7SLGK1n7vCEixbPa0ocUESdqjnZv6uO3yPOHfNrK7ZfhnkVxFOKeJbV7pn6BzaQPlX6oik2tqD0Oqr2tY9rlB6WRfyq/qBOVqhb8hpyivzFRRwsrPFDpRPEj//yKv5FYzYfb702A+Uhopvjvt9QPNVXN+FxDlX5v6wr7tTVCeZ6XK9uiKKffskZ5LedFFRFeKysF4xXMRRmvpaUoFRjKWNkhX1SUwS92kxCIijL+FOY1Vopib9RcvAbftVpXN1Cm+C0NQF1DD+UBBQyEznVl96Dx1useNO6HhljQVDHmywC9xooDdOgFJ41rFvRmI3oL/vHHWN+L909Sdt6C8hotmj4rRKgRkUbEx1eOuSjjonokILCQfF6mYiT4o1IY3lmiFjXPM/485k8148sXdZT5MIWf61aIglAZmEvfqXU+7IoDWOfDMewXdBzu876haEEFPfFlXZyKXY6XwDEU3lOoXvkeTKZsLL2G+4fCXOYpcIfuWGVBw1DhB7tko/iH5Zq5cYjLWuUQ86KJeK0VUUWUwYjGBIvnWRhqxjZg5qCZAkHb5/1RB8YBlGGbYmlZN+Er9gp1JvWad05c/y4OwIBhnYVb0Ap1LcMeTycSB6AraH0G6gUclg1JjxUHUFbsTA6vx54e04EK5h6WhsWjrHGAg+OHGZUe+QMJj/RVNQxM+4SMED90xHvrbtD3ung3wLJFt6WwKzLrRi0i6XNcoQai/QihqGP4G2CJMkkHb65iOdM/Iceg+bf+xq5t0Gvp8Q7VCzi/n2PoNdzvbURyxN/g8BV7g8rkrLrX+uGgOIDcr8wJybU9wFbE9wCrnUUuqnYW80qEr+QMXaLl2s6iLyr47I9FDZELCJyHo9Z7sX5rNftOMP1pG/RVva6wneAGdd7CvCXF4fvLjkHj372pjBte64MmBFXq9dem1z/3N8bX62Y0vQ7ZdzD0GuZvKHrFh+878JrHHJOY82EjkvPGPQWNDURN5RLsOWsgzDiAJ+oYdhnqFW5pGlSm6XV8u/xzqnodSOOxfa9wcpBNr+FEppjv6zU0nrJWcXZ40US8VpnwslJzdioR/F5ZKaooR8GoVNrlZ9xAyB8KRK0oZRbnyN+NYa75MBDVcz70REWOQfP/Yb/+b/UKjwNE/XY5DNXaDy1LUD9U5EMOqkVY+N889k/qSq7OG9dI/6PleYcI6sU9ePnHppLhgLZ2xwFk2CTmc8xit51dlWU1K8uK13hF7qU8rmqR9tSqEV2pohai/ONKriu/VybEbLtb8Lk79mhrQByAJtsPX6rk75WXp60HyyDA35gEc+9+rXxO/PTqiwOU08tu0/9z/7BsdmLy6IkDSIIOyTKicXZIRtBkf2xFjLKfIGJpKxQhzSZEzeZPvU1DHvp/5gjlIbe0NcAuL/s48Mcqm6XG/gvRi8yt5M6TKK9z4hUHsJCDaCCx+h+XLe2gHIl5Xsgwr7VzJ58ib/uxj1p2oK0o4833sl8TC9Tfr+vLstyV5bKpyCF4c1eL5B/vLn1F+xbmVf0j///1l80rmAyxy2sdZbMVXN2yiC9NGjq3XC9f583Ortj1bWuiwp03rIoyKp/P5Lrypn1KDJW8fmq53Wstek2C9UpzzRh/TLFpEn45bqNP3nj6pDZqjxxbmzFK07RguSAHlbWaHKRE3Xm5nGJWVJSj8qmaxlPWOGMHxAFwKarIQVbUIs0FOagU1eSgCoKjApbUM24g5A9VqAxPVY76iv+iBbVitVuCgkvln8+aaWdgHMCHLOkZB4DMgYua/2abD7XO1dgEeCLoe047yEH/er1M55CweOlAdegF58LXCT2pOACdQG9h4c0/5B8S0iTnNHKH7yJTL3uoMfHfJ7rhIneoMaJz0Lprxz6R4OC0bJyqQuDoWvEJXePsUCDKYBzAeIoq/zBTRRA1B/N8av0hKSKAMXKxJDZU6/qLvct/tkHKsLXwARz7DiGnG4l938EZOELACD0w73OIGey/Wd+gOcK+AwHUpdfM1y4zMGvc0ZPcd8CXsokTZtPL0g8h4Wme9m6rBfTDjs26oH6IUzB1zKitH8oAXMY5QcIXk7PhDcramFzWPCU5O1xE4LxhPCVRLT8EUc15Q/8hBRXdgF+1/BCyfQRp+B4OifeGsRo1f6OPyCR/9dmTf1gU8hvvTjY+Lz/vBY377TL/ETDZJCerVyIbOU294gBwTJID9r8s0YX8cL+3QQW2aJJa/N6KxsNXFBU5qFx4gJkp5jQe7vsLGg9fDlScHb58EDQedZ2S1RC5iSpEEsJA1dcpRP0hAzWS3PZbZKLa9pdluOYxAu6Z63jIYfvLIetKiBrJ8MPWRLXaZdDQ9GT5AOlX+/zKRLXqJU9lfLKj8je6DjQBVvG7Qy+9x8il9hONjGWCsfjw7YfdpygMvbrPO0RUhjo+bf0QIX3FTvftv/hB2sxlofEY82EH5cgRB0g85kMDFdADqVccAMvz0itnNzi6/ULSiX3EXnYZnOTc9uoVpaBDHKQX4KWsmYdectZ+8dCL93hpGeau7t3qRRcgwvO6ygfHAWBGnM2c9hOZwPdNLXEAQeOpNsY4Z6f8/1KGRaY5qffKGs6OeKo6iy828rWtia814s+nBqpNJFEx1VJX/GCm/pABkUt6+/eSGqiW9Rfgwy+LbhoPVYN5ZXlbiLcVGAcAU1VdHvryERUgBrM0UG1xAOD2LotO+8V2enPKPoRdQ7HDflkSjcxoj10Gei0MVJtdllGA1269irUt99VDuF7WfbZF2qlXAYbLxKKXwksRPUYOyJd13HU+hdr3npdIW4L2Ja3B1l3Ra9xJZIrXcqKZG6iWfERgKthQ7D62g3FiT1X2noedJyLGIK0/WEaxGwJTGWvbEvM8kf4R4Fe4dL8u/hHmttaU0+46DooDAA9WKaue818yJPXDPOIA4ADMh7t780HzZGvNBV+/htjlOHHA3Pfw9KR7/kE9/A0q38NTt16XttZciBPIAXoVltxMomxIt17ytd659IJGSXN7O46x31saw8uM6XEAC1OwRU0d3fnihXXFAXTHV0NFhhMBYt8rDM090zyGzKXXFtlcE8kwVpwIltv253l5S2yuSYuKpePLzzFpqJb1l3Tnt8ztniFGXf1wHrb+ihwwm1TvXAoqA+EKA9Vil1M5e8/Tju7NHOZLBOdC7DJxwFzizgQgoP++UA9/A5yQnnbq5RoYjyTQ33CQG2eskzgNsot9J1Z/Q10EQ7c3di9Xy8kgebO0pjrO6n9CJkEOO/g6LVxLa4Eaq46vfu5G+wjw81ab7R3rSrujsEzD1pVFZCXNPdk+LUQFek2MoajrBaO9z+sevZCtQStqdtkI6GUOGtuy4OKV9um1BuvftJd/COJCb0mfXkuzPXcsPA5gm4Hm1qEIUcEw2BlD0fhe8Lyt2QJ98jaGxhfhSoSc8CwrBTVcsi3W9LIYmn379IxZ8xHBoDuWe+Z3pAmPVzQeGR5vyUF4ofLM/mSIh8cLM5QvIIgpEqgUrRSY7zluQ/lFG3TXUIlcjT5QHdWMA0i39w/qPM5TTWbZj+zmm1saD9yHpRMZ/3l9SpFHPiKkOOi9cQDo9nZ173bQFLO7zc3zy9fTgjL3UOyLY6ds8XP9+Pfv5m42Re6hCFCh4+thl6XX9+OnV+l5JMsl62iB1+lGTvak6TqhrPA70AQ3PHriALwFYDQi9/Yu4KVwt62gVQu6t6I9sl9wI+F5oAmYz72Zp0InB6UyIeGO2Gk8/uQgJxNoDFQCMgpQHRVpH6GYSrd34vwIvqSMA7Ic9aNSucD5u4x74gDpQrq9C9rVvYccCR7p1ohaL7nQ/p6mPXYZppA7H70uFna9ZI8Ben1PuyaD0TIID0alIBf3JNX7oTacidTrJcl6Rzj2GuGh84YfapZIX2dC9HlDn+el27vJiNc8r34EZ+Ygv3k+AJVkMhKz681HJB21+2MMmiBU6ULMev0NuWS4O3m9pOP708s/hOmOAvISD84cdAiqDIx82PISi0MMtaMPiJgfWPP9C3OdIslBhbGiAKjtOsUUHYAK0n/e6W1FWjegwO2lg9NEDMlHFI7KAKNTb6umF03kHDNjRxk0/qgMOL6F5kPoei1B0EC34cNb0BMHGIiaSsf3v3WPXlO5+p2Mp9fvfC/gG90sdb3UuCgBp9mmnvmIDsscdAgqCOGuiRYXVe1XrgRRT91+wcaSTrsM2B7PycnrBZhBy9zUC0yzOcj+Rn3zEh+UQfgQVConuUmuoMbavl4OyADGXpmDCeQiB3nu6x2CCigBubavJ15XO2zBoac97qLxeK7YuzMHHYqK921rrzIVFandIJMxuXt8nEETgAqco/dMRdX0ItKV/KSnr5ds7R9i06td1hGF2xuyYu9dLPJKcBygGxVyfImKqvKIMJZf9irvJgEF5DEOEAU9n4Oj7gQrT6lxgBiQjm57aDy2mwu74r2OzEEHocqgxZ52xQGKCIRCjjRoQlClg/hWFB3+RgG4Sosz0AtERhNNLyUOECtu7wHp7IbHAYJQoeMbR0ocQDH30O1dUN3cp95OhIu3LCFGQYUR32Wu8pbVbiA77PO0GG/FHupKeqIWYLW4UFE1vSAZoDh5u1xASkCnXjJiwA9HnLpeMdYOgTn5hyCHN3WekPFcBDuyHI2JCsztSkVV1l+RdtZE6d6RGYyJzBtcOlM/WNZfB6JKEsETVddfiv2ikORwBvYLkjJo7LbLDFA9zkIvuZvwaeoFvu2+fW6m95h/FMQNQ5Xz3H0RK/1QOZGrzJuuE7naOd/eE7l+53wHocJLBhL1nC9CwI2hcmdzlx5pkyQEFUR8b7CCipRuwNrHBLf35O0XA3w6lfCj6pXKxybnoBdkL6Q2veplHXR7U8+8xO5N4wZ1SLZjP1QtRQOMA8B0H0R+1u+kEhnpfzNzZd4lcuQVGQs1AVQH4shLnESAav9XvK4RVuzKZDBaHKBF/du2eMuccQDAgX073qAJQpWGacac/gbgD2/ORC/p+P5QZxxAP2J9BJJaKKp0fPmFnqAfQhoPOCr2h/TReH6HVBiISqTj+4SUPGZKN4BH+/ycvvE3f4JQweVIn8hpl0HuTX5E6vTtMjwstXfrReSsuTsTvaSD+JY74wDgJNbckuNn+E7ViH6vZ+4kJW8qiPbOUe7KcGqmM7WLwvKmDkOFB0kSJW8qsF+FduT+KGSTQFTg+CaFwy5D73h5xEETgqp66na9wBEpsZo5h+8FVow7h15w0nwV/0jNpS1PXDjfbGy2gENoeo2JSiQtvjRNQC9emrW1jIK8HI8sGYgqN+xmzjiAjPbu0TEHTQAq2rdtXjntMuT2notekOPr0kvSBqqjX+P7h6OjgkNgH4pews2u9spymMqtEsG7O0grqrfbahFTRbQWdd1eMh4q4MVfI3jPCOADpGDxWbFveldKQ+MAo6ECLuxjao8DxCmcM485aAJQwd0az6n9focYRA9356IXPNOt6AX6IcgDO0+bHtNPDuplkPTlIzoEFUZ8lX4IonOQVqrF/AaTg4bfUO6HChudZPJ5BF4XCJ6SAHJQAO/rF1BBXtip4xwi+KTHHTRBqGDwOOzy9sz1unXEAaDb60kO6jsx2J2PaBRU6PgCv5c115VicGXKnvjfo+q88ZRqEJZLUEdAJfu21VcY3KMat+4ZPHZEj3ZIKBQVZIR8Z1aeA4Ux4SMPGn9UCvJqUKu/Ackr56MXzINCVX+jpvFQeYJ+xoafkBlCDjoAFTi+L7RFrfMRVbZOzpi7426SBKECB9Fhl+UDkzOyXxNFL9MuYywfmJ6RXoALm1v1Ah5k6grf/cLkfSgqWF2tsdSLs3oFjSeDH7Sh8ZR/rGg8/LGKxlNWahpPWauYQA0ENkUSojK2o6NCR2qRNaggLzFMnUydK3aNOd1OU36HhH4Dlcpm35IGFcQBQFrWbzM99cnarxhwurakQQV2OQeJz89KL8nxneVSr7Yf5vCehiMvFkNQKTwqJPthu6yGnFIybHF/2Hp/ICqgBHzk7VOofV0gm8WVx+v6zWBMGKpcXt0hi78Bkhmujj5oQlDlfLdBFrsMbp7anpVe4EIEXS/RD2W097aPKei9Yg/iHw5EBReUoNbU8XmDCVoO0GuLa84OK/9Y0Xh4rRVRRZSpIqyIAETLBBoXFcvv9Y2a56mMAyB5NmfGPLdpzJMJY2z+hKGCBZggTepxADBvXJ2VXQZnalCDCvWS4Y3Ps9JL7kbeAb1s/sYrPvJmeAgquEUB+huCxhMXRUEAe2OJci6iSNB4iiLmNB7ERQwJGk8pEjSetKylgnLE/8hpPIjxP6IGlTOBkIDgP/QLqJCZsssaVJCPCIMzo6vjkk2CUEEm2QSsK8Gz8oELdDZ8AKXV9n0HkBz41sYHOMXvBazyxTvUi/dF3mdjCiM736QQIt6N+R8JAiMBYS7KEBgJiI+EGPMai6uR0KA2EM34GhW1IODy7IlEhXmJIyYtc3VlxaCZa0hQcDgq6GM3zHEuAOQFq++QOXn7BfNzX1EHT69Q0pNPz0CvKWzwWudVtj6Xki/9Znry+Yim8CKhHwZQ63xElY/MKEjIxJOKizvKas9bYQL5iyomUPNHi2gwKkVzeF/TTUIhqhiick2j3lhV3QtzqvsOP0pbtyoqUrsBVu9E+W9ecTNPzS6Xovl/SkvvsIqq6UWXz8rjF2/bAlNWOfwiU6R4XgSVRYt5EJpXRDhaIIqckeJ5EYRuRGkrql5gKwpGZRQXW+0qkGcjn57WY1LzVp3Hn9luMS3LhBdeWfBKr2jaihZ9ogDUxW72YF6XMWFa7zbuNctvjX90+uUWGfeaAX+jjqFab7s76bJFehTZdh/i2Smm37+s+xuNXnj+3Q92MuV7jm16RRbzwZauq71Or9wvDe6C6IcVjYfPtRVnR+ws5mhrvXvx5MrrFuX1LmjbfFs+onYFiJauWwFPqXy0V5L03k/UeAYFnb73Ax+1vE+p80oSp15RnNJi57hy7ATK5y5mqds7q+IAlV5ibS30Kv/jkwpXdTp7+nr7PqHR9v329TTjx+7UtopQQq1XqdP/AGzk3A7GVjCDAAAAAElFTkSuQmCC" alt="" /></Link></div>     
    </div>
  </div>  

   <div style={{fontSize:"11px",fontWeight:"700",border:"1px solid black",color:"white",backgroundColor:"#333",padding:"10px",justifyContent:"center",paddingLeft:"130px"}}>
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