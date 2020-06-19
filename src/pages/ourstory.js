import React, { Component } from 'react';
import MarkdownContent from '../components/markdownContent';
import Navbar from '../components/navbar';

class OurStory extends Component {
  render() {
    return (
      <section className='ourStory'>
        <MarkdownContent 
          title='hi There'
          content={`#Hi There<sup>Hi</sup>
            
          `}
        />
      </section>
    );
  }
}

export default OurStory;
