import React from 'react'


import { Sheet,SheetContent,SheetTitle,SheetTrigger } from './ui/sheet'
import { AlignJustify } from 'lucide-react'
import Nav from './Nav'
import Logo from './Logo'
import Social from './Social'


const MobileNav = () => {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-24'>
            <Logo />
            <Nav 
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-2xl'
            />
            <Social 
              containerStyles='flex gap-x-4 '
              iconsStyles='text-2xl'
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav