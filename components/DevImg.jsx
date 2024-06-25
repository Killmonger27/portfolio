import Image from 'next/image'
import React from 'react'

const DevImg = ({containerStyles,imgSyles,imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} priority alt='photo of landry ouarma' width={250} height={200}/>
    </div>
  )
}

export default DevImg