import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.png' width={60} height={60} priority alt='logo landryouarma'/>
    </Link>
  )
}

export default Logo