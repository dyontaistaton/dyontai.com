export function onHover(style){
  return `
    :hover{
      ${style}
    }
  `
}

export function onFocus(style){
  return `
    :focus{
      ${style}
    }
  `
}

export function triggerReducer(type){
  type.toLowerCase(type);
  switch (type){
    case 'onhover': return onHover;
    case 'onfocus': return onFocus;
    default: return onHover;
  }
}

export function bgColorChange(on,[...colors]){
  return `
    background-color:${colors[0]}
    ${triggerReducer(on)(`
      background-color:${colors[1]}
    `)}
  `
}

export function zoomIn(on,scale=1.1){
  if(!on){return `transform: scale(${scale});`}
  return triggerReducer(on)(`
    transform: scale(${scale});
  `)
}

export default Object.freeze({
  onHover,
  onFocus,
  triggerReducer,
  bgColorChange,
  zoomIn
})