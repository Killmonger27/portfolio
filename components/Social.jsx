import Link from 'next/link'
import React from 'react'
import { RiDiscordFill, RiFacebookFill, RiGithubFill, RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri'

    const icons = [
        {path:'https://www.discordapp.com/users/623554636934283273',name:<RiDiscordFill />},
        {path:'https://www.linkedin.com/in/landry-ouarma/',name:<RiLinkedinFill/>},
        {path:'https://github.com/Killmonger27',name:<RiGithubFill/>},
        {path:'https://www.facebook.com/profile.php?id=100051930944674',name:<RiFacebookFill/>},
        {path:'https://wa.me/71371356',name:<RiWhatsappFill/>}

    ] 
const Social = ({containerStyles,iconsStyles}) => {
  return (
    <div className={containerStyles}>
        {
        icons.map((icon,index) => {
            return (
            <Link
                href={icon.path}
                key={index}
                target='blank'
            >
                <div className={iconsStyles}>{icon.name}</div>
            </Link>
            )
        })
    }
    </div>
  )
}

export default Social