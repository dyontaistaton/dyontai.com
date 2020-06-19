import React,{Component} from 'react';
import './index.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.items=props.items;

    this.state={
      selectedItem: 0
    };
  }

  getItems(items) {
    if(!items) {return; }
    let itemObjects=[];
    for(let i=0;i<items.length;i++) {
      const item=this.getItem(items[i]);
      itemObjects.push(item);
    }
    return itemObjects;
  }

  getItem(item) {
    return (
      <li className='navbar-list-item'>
        <a href={item.href} className='navbar-list-item-link'>{item.title}</a>
      </li>
    );
  }

  render() {
    return (
      <nav className='navbar'>
        <ul className='navbar-list'>
          {this.getItems(this.items)}
        </ul>
      </nav>
    );
  }
};

export default Navbar;