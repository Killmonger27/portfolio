import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri'

import {MdWavingHand} from 'react-icons/md'

import DevImg from './DevImg'
import Badge from './Badge'
import Social from './Social'


const Hero = () => {
  return (
    <section className='py-5  xl:py-10 h-[84vh] 2xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none '>
        <div className="container mx-auto">
            <div className=' flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] '>Full-stack web Developer</div>
                    <h1 className='h1 mb-4 flex'>hey, I'm Landry Ouarma
                    </h1>
                    <p className='subtitle max-w-[490px] mx-auto xl:mx-0'> I create user-friendly and innovative websites, always staying   updated with the latest trends. I am currently a computer science student at IBAM.</p>
                    <div className='mx-auto xl:mx-0 mb-4'> 
                        <Link href='/contact'>
                            <Button className='gap-x-2'>Contact me <Send size={18}/></Button>
                        </Link>
                    </div>
                    {/* Links to scials medias */}

                    <Social containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transiton-all'/>
                </div>
                <div className='hidden xl:flex relative'>
                    <div className=' light:bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-5 -right-1' ></div>
                </div>
            </div>
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary' />
            </div>
        </div>
    </section>
  )
}

export default Hero