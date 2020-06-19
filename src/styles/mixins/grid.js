export function grid({rows,columns,gap}){
  return`
    display:grid;
    ${rows?`grid-template-rows:repeat(${rows},1fr);`:''}
    ${columns?`grid-template-columns:repeat(${columns},1fr);`:''}
    ${gap?`gap:${gap};`:''}
  `
} 

export function gridItem({rowSpan,columnSpan,justify,align}){
  return`
    ${rowSpan?`grid-row: span ${rowSpan};`:''}
    ${columnSpan?`grid-column: span ${columnSpan};`:''}
    ${justify?`justify-self:${justify};`:''}
    ${align?`align-self:${align};`:''}
  `
}

export default Object.freeze({
  grid,
  gridItem
})