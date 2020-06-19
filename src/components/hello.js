import React, { Component } from 'react';
import styled from 'styled-components';

const Container=styled.div`
  align-content:center;
  justify-content:center;
  text-align:center;
`

const HelloMessage=styled.h2`
`

export class Hello extends Component {
  render() {
    return (
      <div>
        <Container>
          <HelloMessage>Hello</HelloMessage>
        </Container>
      </div>
    )
  }
}

export default Hello
