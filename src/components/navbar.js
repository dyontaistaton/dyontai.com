import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import mixins from '../styles/mixins';
import styled from 'styled-components';
import gsap from 'gsap';

const SNav=styled.nav`
  ${mixins.media(mixins.mediaSmall,`
    width:100%;
    margin-top:1.875rem;
  `)}
  ul{
    ${mixins.flex({align: 'center',justify: 'space-evenly',direction: 'row'})}
    li{
      transform:translateY(30px);
      opacity:0;
      h6{
        transition:ease 1s;
      }
      :focus h6,
      :hover h6{
        ${mixins.zoomIn()}
        padding:0 .2rem;
      }
      padding:0 1.875rem;
      ${mixins.media(mixins.mediaSmall,`
        padding:0 0.25rem;
        svg{
          margin-right:0;
          width:1.2rem;
          height:1.2rem;
        }
        h6{
          overflow:hidden;
          width:0;
          transition:ease .5s;
          opacity:0;
        }
        :hover{
          padding:0 1rem;
          svg{
            margin-right:0.5rem;
          }
          h6{
            transform:translateY(0.5px);
            width:initial;
            opacity:1;
          }
        }
        :focus{
          svg{
            margin-right:0.5rem;
          }
          h6{
            transform:translateY(0.5px);
            width:initial;
            opacity:1;
          }
        }
      `)}
      a{
        ${mixins.flex({direction: 'row',align: 'center',justify: 'center'})}
        svg{
          margin-right:0.5rem
        }
        h6{
          letter-spacing:0.06em;
          text-transform:uppercase;
          color:inherit;
        }
      }
    }
  }
`;

export const NavItem=props => {
  return (
    <li>
      {props.download?
        (
          <a href={props.href} download>
            {props.icon&&(<props.icon />)}
            <h6>{props.title}</h6>
          </a>
        )
        :
        (
          <Link to={props.href}>
            {props.icon&&(<props.icon />)}
            <h6>{props.title}</h6>
          </Link>
        )
      }
    </li>
  );
};

const Navbar=(props) => {
  React.useEffect(()=>{
    gsap.to(`${SNav} li`,{y:0,opacity:1,stagger:0.2,duration:1,delay:0.1})
  })
  return (
    <SNav>
      <ul>
        {props.items&&props.items.map(item => {
          if(item.href===props.location.pathname) {return null;}
          if(item.filter&&item.filter(props)) {return null;}
          if(item.component) {return (<item.component {...props} {...item} key={item.title}/>);}
          return (
            <NavItem {...item} key={item.title} />
          );
        })}
      </ul>
    </SNav>
  );
};
export default withRouter(Navbar);


