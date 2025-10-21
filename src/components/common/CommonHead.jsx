import React from 'react'

const CommonHead = ({head, pp}) => {
  return (
    <>
    <div>
        <h2 className='text-[54px] text-cofee font-bold font-playfair text-center'>{head}</h2>
        <p className='text-xl text-secoundary-text font-normal font-playfair text-center'>{pp}</p>
    </div>
    </>
  )
}

export default CommonHead