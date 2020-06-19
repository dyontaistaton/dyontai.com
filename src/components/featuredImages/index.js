import React,{Component} from 'react';
import './index.scss';

class FeaturedImages extends Component {
  constructor(props) {
    super(props);
    this.imgs=props.imgs;
  }
  getImagesElements() {
    let res=[];
    if(!this.imgs){return res;}
    for(let i=0;i<this.imgs.length;i++) {
      const img=this.imgs[i];
      res.push(<div className='featuredImages-image' style={{backgroundImage: `url(${img})`}} />);
    }
    return res;
  };
  render() {
    return (
      <section className='content featuredImages'>
        {this.getImagesElements()}
      </section>
    );
  }
}

export default FeaturedImages;