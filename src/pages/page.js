import React from 'react'
import {Helmet,HelmetProvider} from 'react-helmet-async';
import {ThemeProvider} from 'styled-components';

export default props=>{
  return (
    <div>
      <ThemeProvider theme={props.theme||{}}>
        <HelmetProvider>
          <Helmet>
            {props.title&&(<title>{props.title}</title>)}
            {props.description&&(<meta name="description" content={props.description}/>)}
            {props.color&&(<meta name="theme-color" content={props.color}/>)}
          </Helmet>
          {props.children}
        </HelmetProvider>
      </ThemeProvider>
    </div>
  )
}