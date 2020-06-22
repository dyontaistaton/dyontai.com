import {MdBook} from 'react-icons/md';
import {FaDiscord,FaLinkedin, FaGithub} from 'react-icons/fa'

export const defaultLogo=undefined;
export const defaultNavbar={
  items:[
    {title:'Resume',href:'/resources/Resume.pdf',download:true,icon:MdBook}
  ]
}
export const defaultFooter={
  social:[
    {icon:FaDiscord,href:'https://discord.gg/YwRgkUF'},
    {icon:FaLinkedin,href:'https://www.linkedin.com/in/dyontai/'},
    {icon:FaGithub,href:'https://github.com/dyontaistaton'}
  ]
}