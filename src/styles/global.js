import {createGlobalStyle} from 'styled-components';
import style from '../styles';
const globalStyle=createGlobalStyle `
  
  body{
   font-family:${style.constants.fonts.paragraph};
   color:${style.constants.colors.white};
  }
  a,ul,ol,figure,article,span,p,h1,h2,h3,h4,h5,h6,svg{
    margin:0;
    padding:0;
  }
  a{
    color:${style.constants.colors.white};
    text-decoration:none;
  }
  ul,ol{
    list-style:none;
  }
  h1,h2,h3,h4,h5,h6{
    font-family:${style.constants.fonts.header};
    font-weight:normal;
  }
  h6{
    font-family:inherit;
    letter-spacing:0.06em;
    text-transform:uppercase;
  }
`;

export default globalStyle;