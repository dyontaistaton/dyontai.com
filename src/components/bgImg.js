import React from 'react';
import style from '../styles';
import styled from 'styled-components';

export const SBgImg=styled.figure `
  ${style.mixins.flex({align:'center',justify:'center'})}
  will-change:transform filter box-shadow;
  position:absolute;
  top: 0;
  bottom:0;
  left:0;
  right:0;
  ${style.mixins.background()}
  z-index:-1;
  transition:ease 3s;
  background-image:url(${props=>props.img});
`

const BgImg = (props) => {
  return (
    <SBgImg
      {...props}
    />
  )
}

export default BgImg
