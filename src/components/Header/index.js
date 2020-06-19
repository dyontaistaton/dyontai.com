import React,{Component} from 'react';
import './index.scss';
import {FaChevronDown} from 'react-icons/fa';
import {ReactSVG} from 'react-svg';
import UseAnimations from 'react-useanimations';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll=this.handleScroll.bind(this);
    this.handleMenu=this.handleMenu.bind(this);
    this.isMenuOpen=false;
    this.logo=props.logo;
    this.isFollower=props.isFollower;
    this.startingHeaderClassName=props.headerClassName||'header';
    this.items=props.items;
    this.state={
      headerClassName: this.startingHeaderClassName,
      menuClass: 'header-menu'
    };
  }

  handleScroll=function(e) {
    if(!this.isFollower) {return;}
    let pageY=window.scrollY;
    if(pageY>=30) {
      this.setState({
        headerClassName: this.startingHeaderClassName+' --fixed'
      });
    }
    if(pageY<=30) {
      this.setState({
        headerClassName: this.startingHeaderClassName
      });
    }
  };

  handleMenu() {
    if(!this.isMenuOpen) {this.setState({menuClass: 'header-menu --open'});}
    else {this.setState({menuClass: 'header-menu'});}
    this.isMenuOpen=!this.isMenuOpen;
  }

  componentDidMount=() => {
    window.addEventListener('scroll',this.handleScroll);
  };

  getItems(items) {
    if(!items) {return;}
    let elements=[];
    for(let i=0;i<items.length;i++) {
      const item=items[i];
      elements.push((
        <li className='header-menu-list-item'>
          <a href={item.href} className='header-menu-list-item-link'>
            <span>          
              {item.title}
            </span>
          </a>
          {(() => {
            if(!item.items) {return;}
            return (<FaChevronDown style={{paddingLeft: '.275rem'}} />);
          })()}
          {(() => {
            if(!item.items) {return;}
            let subElements=[];
            for(let ii=0;ii<item.items.length;ii++) {
              const subItem=item.items[ii];
              subElements.push((
                <li className='header-menu-list-sub-item'>
                  <a href={subItem.href} className='header-menu-list-sub-item-link'>{subItem.title}</a>
                </li>
              ));
            }
            return (
              <ul className='header-menu-list-sub'>
                {subElements}
              </ul>
            );
          })()}
        </li>
      ));
    }
    return elements;
  }

  render() {
    return (
      <div className={this.state.headerClassName}>
        <icon className='header-logo'>
          <ReactSVG
            src={this.logo}
            wrapper="span"
          ></ReactSVG>
        </icon>
        <icon className='header-icon' onClick={this.handleMenu}>
          <UseAnimations className='header-icon-icon' animationKey='menu3' />
        </icon>
        <nav className={this.state.menuClass}>
          <ul className='header-menu-list'>
            {this.getItems(this.items)}
          </ul>
        </nav>
      </div>
    );
  }
}
//<ReactSVG className='header-logo-image' src={Logo} wrapper='span'/>


export default Header;