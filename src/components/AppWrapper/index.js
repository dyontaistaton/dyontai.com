import React,{Component} from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './index.scss';

class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.footerHeight=props.footerHeight||'90vh';
    this.isMobile=window.innerWidth<960;
    this.header=props.header;
    this.footer=props.footer;
  };

  getHeaderClass() {
    let base='header';
    if(window.location.pathname!=='/home'&&window.location.pathname!=='/'&&window.location.pathname!=='') {base+=' --home';}
    if(window.innerHeight<30) {base+=' --transparent';}
    if(window.innerWidth<960) {base+=' --mobile'}
    return base
  }

  isOnHome() {
    console.log(window.location.pathname);
    if(window.location.pathname!=='/home'&&window.location.pathname!=='/'&&window.location.pathname!=='') {return false;}
    else {return true;}
  }

  headerSpacer() {
    if(this.isOnHome()&&window.innerWidth>920) {
      return (
        <div className='pre-header flex-end-space-between' />
      );
    }
  }

  render() {
    return (
      <main className='appWrapper'>
        {this.headerSpacer()}
        <Header
          isFollower={this.isOnHome()}
          headerClassName={this.isOnHome()? 'header --transparent --home':'header'}
          items={this.header.items}
          logo={this.header.logo}
        />
        <main className='elements-main' style={{marginBottom: this.footerHeight}}>
          <div className='appWrapper-content'>
            {this.props.children}
          </div>
        </main>
        <Footer
          hasBreakoutImage={this.isOnHome()}
          title={this.footer.title}
          items={this.footer.items}
          img={this.footer.img}
        />
      </main>
    );
  }
}

export default AppWrapper;