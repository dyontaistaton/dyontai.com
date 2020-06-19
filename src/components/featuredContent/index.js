import React,{Component} from 'react';
import './index.scss';
import BrokenText from '../BrokenText';

class Link extends Component {
  constructor(props) {
    super(props);
    this.subtitle=props.subtitle;

    if(typeof props.title == 'object'){
      this.title=<BrokenText texts={props.title}/>
    }
    else{
      this.title=props.title;
    }

    this.href=props.href;
    this.img=props.img;
    this.isTitleTop=props.isTitleTop||false;
  }
  getItemOrder(image,content) {
    if(this.isTitleTop) {
      return (
        [content,image]
      );
    }
    else {
      return (
        [image,content]
      );
    }
  }
  render() {
    const image=(
      <figure className='featuredContent-column-imageContainer'>
        <div className='featuredContent-column-imageContainer-image' style={{backgroundImage: `url(${this.img})`}} />
      </figure>
    );
    const content=(
      <div className='featuredContent-column-content'>
        <h6 className='featuredContent-column-content-subtitle'>
          {this.subtitle}
        </h6>
        <h3 className='featuredContent-column-content-title'>
          <span>
            {this.title}
          </span>
        </h3>
      </div>
    );

    const itemOrder=this.getItemOrder(image,content);

    return (
      <a className='featuredContent-column-link' href={this.href}>
        {itemOrder}
      </a>
    );
  }
}

class FeaturedContent extends Component {
  constructor(props) {
    super(props);
    this.sectionBumpers=props.sectionBumpers||[false,false];
    this.title=props.title;
    this.subtitle=props.subtitle;
    this.img=props.img;
    this.subImg=props.subImg;
    this.isLeft=props.isLeft;
    this.href=props.href || '/'+this.subtitle.replace(/\s+/, '').toLowerCase();

    this.columnClassNames=['featuredContent-column --card','featuredContent-column --sectionImage'];

    if(this.isLeft) {
      this.columnClassNames[0]+=' --first';
      this.columnClassNames[1]+=' --second';
    }
    else {
      this.columnClassNames[0]+=' --second';
      this.columnClassNames[1]+=' --first';
    }
  }

  getColumnOrder(cardColumn,imageColumn) {
    if(this.isLeft) {
      return (
        [cardColumn,imageColumn]
      );
    }
    else {

      return (
        [imageColumn,cardColumn]
      );
    }
  }

  render() {
    this.sectionClassName='content featuredContent';
    if(this.sectionBumpers[0]) {this.sectionClassName+=' --beforeBumper';}
    if(this.sectionBumpers[1]) {this.sectionClassName+=' --afterBumper';}
    
    const cardColumn=(
      <div className={this.columnClassNames[0]}>
        <Link title={this.title} subtitle={this.subtitle} img={this.img} isTitleTop={!this.isLeft} href={this.href}/>
      </div>
    );

    const imageColumn=(
      <figure className={this.columnClassNames[1]}>
        <div className='--image' style={{backgroundImage: `url(${this.subImg})`}} />
      </figure>
    );

    const columnOrder=this.getColumnOrder(cardColumn,imageColumn);

    return (
      <section className={this.sectionClassName}>
        {columnOrder}
      </section>
    );
  }
}

export default FeaturedContent;