import React,{Component} from 'react';

class BrokenText extends Component {
  constructor(props) {
    super(props);
    this.texts=props.texts;
    this.getRes();
  }
  getRes() {
    let res=[];
    if(typeof this.texts != 'object'){this.texts=[this.texts]}
    for(let i=0;i<this.texts.length;i++) {
      const text=this.texts[i];
      res.push(text);
      if(i!==this.texts.length && i!==1) {
        res.push(<br />);
      }
    }
    this.res=res;
    return res;
  }
  render() {
    return (
      this.res
    );
  }
}

export default BrokenText;