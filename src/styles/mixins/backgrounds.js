export function background({size='cover',position='center',repeat='no-repeat'}={}){
  return `
    ${size?`background-size:${size};`:''}
    ${position?`background-position:${position};`:''}
    ${repeat?`background-repeat:${repeat};`:''}
  `
}

export default Object.freeze({
  background
})