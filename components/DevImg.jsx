import Image from 'next/image'
import React from 'react'

const DevImg = ({containerStyles,imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} priority alt='photo of landry ouarma' width={315} height={300}/>
    </div>
  )
}

export default DevImg