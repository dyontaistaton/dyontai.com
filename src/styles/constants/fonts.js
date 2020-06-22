import {createGlobalStyle} from 'styled-components';
export const header='Arvo';
export const paragraph='Karla';
export const FontFace=createGlobalStyle `
  @font-face{
    font-family:Arvo;
    src: url('../../resources/fonts/Arvo/Arvo-Regular.ttf') format('truetype');
    font-weight: normal;
  }
  @font-face{
    font-family:Arvo;
    src: url('../../resources/fonts/Arvo/Arvo-Bold.ttf') format('truetype');
    font-weight: bold;
  }
  @font-face{
    font-family:Arvo;
    src: url('../../resources/fonts/Arvo/Arvo-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic
  }
  @font-face{
    font-family:Arvo;
    src: url('../../resources/fonts/Arvo/Arvo-Italic.ttf') format('truetype');
    font-style:italic;
  }
  @font-face{
    font-family:Karla;
    src: url('../../resources/fonts/Karla/Karla-Regular.ttf') format('truetype');
  }
  @font-face{
    font-family:Karla;
    src: url('../../resources/fonts/Karla/Karla-Bold.ttf') format('truetype');
    font-weight: bold;
  }
  @font-face{
    font-family:Karla;
    src: url('../../resources/fonts/Karla/Karla-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic
  }
  @font-face{
    font-family:Karla;
    src: url('../../resources/fonts/Karla/Karla-Italic.ttf') format('truetype');
    font-style:italic;
  }
`

export default Object.freeze({
  header,
  paragraph,
  FontFace
})