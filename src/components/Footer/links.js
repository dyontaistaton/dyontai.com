import React,{Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {FaChevronDown} from 'react-icons/fa';

class links extends Component {
  constructor(props) {
    super(props);
    this.title=props.title;
    this.items=props.items;

  }
  getAccordionState() {
    if(window.innerWidth>960) {return '0';}
    return '1';
  }

  getLinks(links) {
    let res=[];
    for(let i=0;i<links.length;i++) {
      const link=links[i];
      res.push(
        <li className='footer-menu-list-item'>
          <a className='footer-menu-list-item-link' href={link.href}>{link.title}</a>
        </li>
      );
    }
    return res;
  }

  getMenus() {
    let res=[];
    if(!this.items){return res}
    for(let i=0;i<this.items.length;i++) {
      const menu=this.items[i];
      res.push(
        <Accordion bsprefix='footer-menu' className='footer-menu' defaultActiveKey={this.getAccordionState()}>
          <Accordion.Toggle className='footer-menu-title' eventKey='0'>
            {menu.title} <FaChevronDown className='footer-menu-icon' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <ul className='footer-menu-list'>
              {this.getLinks(menu.items)}
            </ul>
          </Accordion.Collapse>
        </Accordion>
      )
    }
    return res;
  }

  render() {
    return (
      <div className='footer-links'>
        <div className='footer-inner'>
          <div className='footer-inner-column-start'>
            <h2 className='footer-inner-column-start-title'>
              {this.title}
            </h2>
          </div>
          <div className="footer-inner-column-end">
            {this.getMenus()}
          </div>
        </div>
      </div>
    );
  }
}

export default links;