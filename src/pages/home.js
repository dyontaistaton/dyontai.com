import React,{Component} from 'react';
import Page from './page';

import Hello from '../components/hello'

export class Home extends Component {
  render() {
    return (
      <Page>
        <Hello/>
      </Page>
    );
  }
}

export default Home;
