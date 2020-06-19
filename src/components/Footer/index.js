import React,{Component} from 'react';
import './index.scss';
import Links from './links';
import Info from './info';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.hasBreakoutImage=props.hasBreakoutImage;
    this.breakoutImageClassName=this.hasBreakoutImage?'breakoutImage':'noBreakoutImage';
    this.img=props.img
    this.title=props.title;
    this.items=props.items;
  }
  
  render() {
    return (
      <div className='footer'>
        <div className={this.breakoutImageClassName} style={{backgroundImage:`url(${this.img})`}}/>
        <Links title={this.title} items={this.items}/>
        <Info/>
      </div>
    );
  }
}

export default Footer;