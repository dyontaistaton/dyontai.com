const mediaSmall='(max-width: 760px)';
const mediaLarge='(min-width: 1400px)';
const mediaLargest='(min-width: 2000px)';

function media(media,style){
  return `
    @media ${media}{
      ${style}
    }
  `
}

function between(styles){
  return `
    ${styles[0]&&media(mediaSmall,styles[0])}
    ${styles[1]&&media(mediaLarge,styles[1])}
    ${styles[2]&&media(mediaLargest,styles[2])}
  `
}

function responsiveValue(attribute,initial,multi=[0.6,1.2,1.4]){
  return `
    ${attribute}:${initial[0]}${initial[1]};
    ${between([`
        ${attribute}:${initial[0]*multi[0]}${initial[1]};
      `,`
        ${attribute}:${initial[0]*multi[1]}${initial[1]};
      `,`
        ${attribute}:${initial[0]*multi[2]}${initial[1]};
      `
    ])}
  `
}

export default Object.freeze({
  mediaSmall,
  mediaLarge,
  mediaLargest,
  media,
  between,
  responsiveValue
})