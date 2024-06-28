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
    <section className='py-5 md:bg-top xl:bg-bottom xl:py-10  h-[84vh] 2xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none '>
        <div className="container mx-auto">
            <div className=' flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] '>Full-stack web Developer</div>
                    <h1 className='h1 mb-4 flex '>hey, my name is Landry Ouarma
                    </h1>
                    <p className='subtitle max-w-[490px] mx-auto xl:mx-0 mb-8'> I create user-friendly and innovative websites, always staying   updated with the latest trends. I am currently a computer science student at IBAM.</p>
                    <div className='mx-auto xl:mx-0 mb-8'> 
                        <Link href='/contact'>
                            <Button className='gap-x-2'>Contact me <Send size={18}/></Button>
                        </Link>
                    </div>
                    {/* Links to scials medias */}

                    <Social containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transiton-all'/>
                </div>
                <div className='hidden xl:flex relative '>
                    {/** Badge */}

                    <Badge 
                        endCountNumb={1} 
                        icon={<RiBriefcase4Fill />} 
                        badgeText='Year Of Experience' 
                        containerStyles='absolute bg-white top-[10%] -left-7'
                    />

                    
                    
                    <Badge 
                        endCountNumb={20}
                        endCountText={'+'} 
                        icon={<RiTeamFill />} 
                        badgeText='Happy Clients' 
                        containerStyles='absolute top-[40%] -right-2 '
                    />

                    <Badge 
                        endCountNumb={5}
                        endCountText={'+'} 
                        icon={<RiTodoFill/>} 
                        badgeText='Finished Projects' 
                        containerStyles='absolute bg-white top-[70%] '
                    />


                    <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[410px] h-[400px] bg-no-repeat absolute top-3 -right-2' >
                    </div>
                    <DevImg containerStyles=' bg-hero_shape w-[400px] h-[410px] bg-no-repeat relative top-3 ' imgSrc='/hero/file.png'/>
                </div>
            </div>
            <div className='hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary' />
            </div>
        </div>
    </section>
  )
}

export default Hero