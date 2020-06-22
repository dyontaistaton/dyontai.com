import React from 'react';
import styled from 'styled-components';
import style from '../styles';
import Navbar from './navbar';
import {ReactSVG} from 'react-svg';

const SHeader=styled.div`
  ${style.mixins.flex({align: 'center',justify: 'space-between',direction: 'row'})}
  ${props => props.isAbsolute? 'position:absolute;':''}
  ${props => props.color? `color:${props.color};`:`color:${style.constants.colors.white};`}
  ${props => props.navColor&&`color:${props.navColor};`}
  ${props => props.bgColor&&`background-color:${props.bgColor};`}
  ${style.mixins.media(style.mixins.mediaSmall,`
    ${style.mixins.flex({direction:'column'})}
  `)}
  top:1.875rem;
  left:1.875rem;
  right:1.875rem;
  padding:.75rem 2rem;
  ${style.mixins.media(style.mixins.mediaSmall,`
    padding: .75rem .875rem;
  `)}
  z-index:100;
  #logo svg{
    height:3.5rem;
  }
  svg{
    ${props => props.color? `fill:${props.color};`:`fill:${style.constants.colors.white};`}
    ${props => props.svgColor&&`fill:${props.svgColor};`}
  }
  ul svg{
    padding:.3rem 0;
    ${props => props.navColor&&`fill:${props.navColor};`}
  }
`;

const Header=(props) => {
  return (
    <SHeader bgColor={props.bgColor} color={props.color} navColor={props.navColor} svgColor={props.svgColor} isAbsolute={props.isAbsolute||true}>
      <div>
        <ReactSVG src={props.logo} id='logo'/>
      </div>
      <Navbar {...props.navbar} />
    </SHeader>
  );
};

export default Header;