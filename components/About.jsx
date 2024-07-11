import React from 'react'

import DevImg from './DevImg'
import Image from 'next/image'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs'

import { 
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar
} from 'lucide-react'

const infoData = [
    {
        icon: <User2  size={20}/>,
        text:'Landry Ouarma'
    },
    {
        icon: <PhoneCall  size={20}/>,
        text:'+226 07399750'
    },
    {
        icon: <MailIcon  size={20}/>,
        text:'landryouarma45@gmail.com'
    },
    {
        icon: <Calendar  size={20}/>,
        text:'Born on 27 Feb, 2004'
    },
    {
        icon: <GraduationCap  size={20}/>,
        text:'Bachelor\'s degree in Computer Science on progress'
    },
    {
        icon: <HomeIcon  size={20}/>,
        text:'Rimkieta sect 14, Ouagadougou, Burkina Faso'
    },

]

const qualifications = [
    {
        title:'education',
        data: [
            {
                university:'Lycée Marien N\'Gouabi',
                qualification:'high school diploma with a focus on Science (D series)',
                years:'2021-2022'
            },
            {
                university:'Institut Burkinabè des arts et metiers(IBAM)',
                qualification:'First year of a Bachelor\'s degree in Computer Science',
                years:'2022-2023'
            },
            {
                university:'Institut Burkinabè des arts et metiers(IBAM)',
                qualification:'Second year of a Bachelor\'s degree in Computer Science',
                years:'2023-2024'
            },

        ]
    },
    {
        title:'experience',
        data: [
            {
                company:'Freelance',
                qualification:' Full-Stack web Developer',
                years:'2023-Present'
            }

        ]
    }
]

const skillData = [
    {
        title:'skills',
        data: [
            {
                name:'HTML, CSS'
            },
            {
                name:'JavaScript, Java, Python, PHP'
            },
            {
                name:'Front-end Development'
            },
            {
                name:'Backend Developement'
            },
            {
                name:'MERN Stack'
            },
            {
                name:'Next.js, React, Prisma'
            },
            {
                name:'Tailwind CSS, shadcn/ui'
            }
        ]
    },
    {
        title:'tools',
        data: [
            {
                
                imgPath:'vscode'
            },
            {
                imgPath:'postman'
            },
            {
                imgPath:'github'
            },
            {
                imgPath:'figma'
            },
            {
                imgPath:'wordpress'
            }
        ]
    }
]



const About = () => {

    const getData = (arr, title) => {
        return arr.find((item) =>item.title ===title)
    }

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
            <div className='flex flex-col xl:flex-row xl:gap-x-32'>
                <div className='hidden xl:flex  relative'>
                    <DevImg imgSrc='/about/dev.png' containerStyles='h-[550px] w-[500px] bg-no-repeat relative items-center' w={380} h={390}/>
                </div>
                <div>
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none  ">
                                <TabsTrigger value='personal'>Personnal Info</TabsTrigger>
                                <TabsTrigger value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger value='skills'>Skills</TabsTrigger>
                            </TabsList>

                            <div className='text-lg mt-12 xl:mt-8'>
                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className='h3 mb-4'>
                                        Passionate and dedicated web developer 
                                        </h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                        I thrive on solving complex problems and continuously learning new technologies to stay ahead in this ever-evolving field.
                                        </p>

                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item,index) =>{
                                                return (
                                                    <div className='flex items-center gap-x-4 mx-auto xl:mx-0 'key={index}>
                                                        <div className='text-primary'>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div> 
                                                )
                                            })}
                                        </div>

                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>Qualification</TabsContent>
                                <TabsContent value='skills'>Skills</TabsContent>

                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
