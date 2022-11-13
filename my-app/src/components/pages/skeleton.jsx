import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


import React from 'react'

const Load = () => {
  return (
    <>

    <div style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)",textAlign:"center",gridTemplateRows:"1fr",padding:"10px",gap:"65px"}}>
            <div>
            <article className='item'>
                    <div className='item-img'>
                    <Skeleton width={140} height={140} />
                    </div>
                    <h3 className='item-title'><Skeleton count={4} /></h3>
                    <div className='item-info'>
                    <Skeleton width={160} height={20} />
                    <Skeleton width={30} height={20} />
                    <Skeleton width={22} height={22} circle={true} />
                    </div>
                  
                    </article>
            </div>
            <div>
            <article className='item'>
                    <div className='item-img'>
                    <Skeleton width={140} height={140} />
                    </div>
                    <h3 className='item-title'><Skeleton count={4} /></h3>
                    <div className='item-info'>
                    <Skeleton width={160} height={20} />
                    <Skeleton width={30} height={20} />
                    <Skeleton width={22} height={22} circle={true} />
                    </div>
                    </article>
            </div>       
            <div>
            <article className='item'>
                    <div className='item-img'>
                    <Skeleton width={140} height={140} />
                    </div>
                    <h3 className='item-title'><Skeleton count={4} /></h3>
                    <div className='item-info'>
                    <Skeleton width={160} height={20} />
                    <Skeleton width={30} height={20} />
                    <Skeleton width={22} height={22} circle={true} />
                    </div>
                  
                    </article>
            </div>
            <div>
            <article className='item'>
                    <div className='item-img'>
                    <Skeleton width={140} height={140} />
                    </div>
                    <h3 className='item-title'><Skeleton count={4} /></h3>
                    <div className='item-info'>
                    <Skeleton width={160} height={20} />
                    <Skeleton width={30} height={20} />
                    <Skeleton width={22} height={22} circle={true} />
                    </div>
                   
                    </article>
            </div>
            <div>
            <article className='item'>
                    <div className='item-img'>
                    <Skeleton width={140} height={140} />
                    </div>
                    <h3 className='item-title'><Skeleton count={4} /></h3>
                    <div className='item-info'>
                    <Skeleton width={160} height={20} />
                    <Skeleton width={30} height={20} />
                    <Skeleton width={22} height={22} circle={true} />
                    </div>
                    
                    </article>
            </div>
            <div>
            <article className='item'>
                    <div className='item-img'>
                    <Skeleton width={140} height={140} />
                    </div>
                    <h3 className='item-title'><Skeleton count={4} /></h3>
                    <div className='item-info'>
                    <Skeleton width={160} height={20} />
                    <Skeleton width={30} height={20} />
                    <Skeleton width={22} height={22} circle={true} />
                    </div>
                </article>
            </div>
    </div>
    </>
  )
}

export default Load