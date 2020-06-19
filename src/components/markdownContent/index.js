import React,{Component} from 'react';
import Markdown from 'markdown-to-jsx';
import './index.scss';
import BrokenText from '../BrokenText';

class MarkdownContent extends Component {
  constructor(props) {
    super(props);
    this.title=<BrokenText texts={props.title} />;
    this.content=props.content || '';
  }

  render() {
    return (
      <section className='content markdownContent'>
        <div className='markdownContent-inner'>
          <h3 className='markdownContent-title'>
            {this.title}
          </h3>
          <content className='markdownContent-content'>
            <Markdown>
              {this.content}
            </Markdown>
          </content>
        </div>
      </section>
    );
  }
}

export default MarkdownContent;
