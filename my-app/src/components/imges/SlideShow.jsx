

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://n.nordstrommedia.com/id/b84a782b-0ae0-46fc-8f08-293415f87ead.jpeg?h=700&w=1608',
    caption: 'Welcome, Parachute ',
    des:"The new collection is here—and hot! Don't wait to get yours.",

  }, 
  {
    url: 'https://n.nordstrommedia.com/id/07a52a9a-1db2-44b6-84e1-ff513661fe9b.jpeg?h=700&w=1608',
    caption: 'Topshop & TopmanIn Store Exclusively at Nordstrom',
    des:"And online too! Don't miss London's latest high-street fashion.",

  },
  {
    url: 'https://n.nordstrommedia.com/id/0ce1ce42-27cd-4f2b-b9b1-8b6c0e72f654.jpeg?h=700&w=1608',
    caption: 'Welcome, Parachute ',
    des:"This modern home goods brand is here to stay with a new, Nordstrom-exclusive color: Slate Blue.",

},
];

const Slideshow = () => {
    return (
      <div className="slide-container"  style={{backgroundColor:"lightgrey",marginTop:"40px",width:"90%",margin:"auto"}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div 
             style={{display:"flex",gap:"none",}} key={index}>
              <div style={{backgroundColor:"lightgrey"}}><img style={{backgroundColor:"lightgrey",width:"100%",height:"500px",marginLeft:"20px"}} src={slideImage.url} alt=""/></div>             
             <div  style={{marginRight:"200px",textAlign:"left",paddingTop:"150px",}}>
              <span style={{fontSize:"30px",fontWeight:"700",width:"60%",textAlign:"left",}}>{slideImage.caption}</span>
                <br/><span >{slideImage.des}</span>
              </div>
                
             
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow
