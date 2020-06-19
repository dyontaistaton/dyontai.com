import React,{Component} from 'react';
import './index.scss';

import BrokenText from '../BrokenText';

class Article extends Component {
  constructor(props) {
    super(props);
    this.title=<BrokenText texts={props.title} />;
    this.subtitle=props.subtitle || 'Articles';
    this.href=props.href;
    this.img=props.img;
  }

  render() {
    return (
      <li className='featuredArticles-list-item'>
        <a className='card-link' href={this.href}>
          <figure className='card-figure'>
            <div style={{backgroundImage:`url(${this.img})`}} className='card-figure-image'/>
          </figure>
          <div className='content card-content'>
            <icon className='card-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="17px" viewBox="0 0 21 17" version="1.1" class="injected-svg icon-svg">
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g id="BigArrow_Beige" transform="translate(1.000000, 1.000000)" stroke-width="2">
                    <g>
                      <polyline class="arrow-points" id="arrow" transform="translate(15.000000, 7.500000) rotate(-90.000000) translate(-15.000000, -7.500000) " points="22 4 15 11 8 4"></polyline>
                      <path d="M17.5,7 L0.5,7" id="Line"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </icon>
            <h4 className='card-title'>
              <span>
                {this.title}
              </span>
            </h4>
            <h6 className='card-subtitle'>
              {this.subtitle}
            </h6>
          </div>
        </a>
      </li>
    );
  }
}

class FeaturedArticles extends Component {
  constructor(props) {
    super(props);
    this.articles=props.articles;
    this.title=<BrokenText texts={props.title} />;
    this.subtitle=props.subtitle;
    this.href=props.title;
  }
  getArticles() {
    let res=[];
    for (let i = 0; i < this.articles.length; i++) {
      const article = this.articles[i];
      res.push(
        <Article
          title={article.title}
          subtitle={article.subtitle}
          href={article.href}
          img={article.img}
        />
      )
    }
    return res;
  }
  render() {
    return (
      <section className='content featuredArticles --afterBumper'>
        <div className='featuredArticles-inner'>
          <h6 className='featuredArticles-inner-subtitle'>
            {this.subtitle}
          </h6>
          <a className='featuredArticles-inner-link' href={this.href}>
            <h2 className='featuredArticles-inner-title'>
              <span>
                {this.title}
              </span>
            </h2>
          </a>
        </div>
        <ul className='featuredArticles-list'>
          {this.getArticles()}
        </ul>
      </section>
    );
  }
}

export default FeaturedArticles;