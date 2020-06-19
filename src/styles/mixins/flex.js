export function flex({align,justify,alignContent,wrap,direction}){
  return `
    display:flex;
    ${align?`align-items:${align};`:''}
    ${justify?`justify-content:${justify};`:''}
    ${alignContent?`align-content:${alignContent};`:''}
    ${wrap?`warp:${wrap};`:''}
    ${direction?`flex-direction:${direction};`:''}
  `
}

export function flexItem({grow,shrink,align,order}){
  return `
    ${grow?`flex-grow:${grow};`:''}
    ${shrink?`flex-shrink:${shrink};`:''}
    ${align?`align-self:${align};`:''}
    ${order?`order:${order};`:''}
  `
}

export default Object.freeze({
  flex,
  flexItem
})