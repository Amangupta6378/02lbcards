import React from 'react'
import Cards from './Cards'

const Tours = ({tours, removeTour}) => {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Plan With Love</h2>
        </div>
        <div className='cards'>
          { 
          tours.map((item)=>{
            return <Cards {...item} removeTour={removeTour}></Cards>
           })
           }
        </div>
    </div>
  )
}

export default Tours;