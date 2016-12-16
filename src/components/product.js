import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let title = this.props.name;
    let amt   = this.props.price.toString();
    let price = `$${amt.substring(0, amt.length-2)}.${amt.substring(amt.length-2, amt.length)}`;
    let name  = title.length > 26 ? title.slice(0,26) + '...' : title;
    return (
      <div className="item" key={this.props.key}>
        <img src={"http:"+this.props.image}></img>
        <div>{name}</div>
        <span>{price}</span>
      </div>
    )
  }
}
