import Image from 'next/image'
import React from 'react'

const DevImg = ({containerStyles,imgSrc,alt='portfolio\'s image',w=315,h=300}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc}  priority alt={alt} width={w} height={h}/>
    </div>
  )
}

export default DevImg