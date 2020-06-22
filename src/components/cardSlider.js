import React from 'react';
import styled from 'styled-components';
import style from '../styles';
import {rgba} from 'polished';
import BgImg from './bgImg';
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md';
import gsap from 'gsap';

const SCardSlider=styled.div `
  padding:1.875rem;
  ${style.mixins.media(style.mixins.mediaSmall,`
    width:100%;
    padding:0;
  `)}
  section{
    ${style.mixins.flex({justify:'center',align:'center',alignContent:'stretch'})}
    box-sizing:border-box;
    ${style.mixins.media(style.mixins.mediaSmall,`
      width:100%;
    `)}
    ul{
      ${props=>style.mixins.grid({rows:1,columns:props.size||3,gap:'1rem'})}
      ${style.mixins.media(style.mixins.mediaSmall,`
        width:100%;
        padding:0.875rem 0;
        ${style.mixins.grid({rows:0,columns:1,gap:'1rem'})}
      `)}
    }
    svg.sliderButton{
      width:1.875rem;
      height:1.875rem;
      cursor: pointer;
      transition:ease .5s;
      :hover,:focus{
        ${style.mixins.zoomIn()}
      }
    }
  }
`;
const SCard=styled.li `
  ${style.mixins.gridItem({justify:'stretch',align:'stretch'})}
  opacity:0;
  position:relative;
  padding:.5rem;
  border-radius:20px;
  overflow:hidden;
  background-color:${rgba(style.constants.colors.black,0.5)};
  :hover,:focus{
    ${style.mixins.zoomIn()}
  }
  transition:ease 1s;
  will-change: transform;
  cursor: pointer;
  span{
    ${style.mixins.flex({direction:'row',justify:'center',align:'center'})}
    padding:0 1rem;
  }
  h6{
    ${style.mixins.flex({direction:'column',align:'center'})}
    text-align:center;
    margin:0 .5rem;
  }
`

export const Card=(props)=>{
  React.useEffect(() => {
    gsap.to(SCard.toString(), {opacity:1,stagger:0.3,duration:0.3});
  })
  return (
    <SCard {...props}>
      <BgImg img={props.bgImg}/>
      <span>{props.icon&&(<props.icon/>)}<h6>{props.title}</h6></span>
    </SCard>
  )
}
const CardSlider = (props) => {
  const [currentCards, setCurrentCards] = React.useState(props.cards.slice(0,3));
  return (
    <SCardSlider {...props}>
      <section>
        {props.cards&&props.cards.length>props.size&&(<MdKeyboardArrowLeft className='sliderButton'/>)}
        <ul>
          {(()=>{return currentCards.map((card,i)=>{return (<Card {...card}/>)})})()}
        </ul>
        {props.cards&&props.cards.length>props.size&&(<MdKeyboardArrowRight className='sliderButton'/>)}
      </section>
    </SCardSlider>
  )
}
export default CardSlider;