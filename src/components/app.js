import React, { Component } from 'react';
import { getProducts } from '../models/products.js';
import Product from './product';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    let self = this;
    getProducts()
    .then(function(products){
      self.setState({
        pageTitle: products.pageTitle,
        products: products.products,
        extraInfo: products.extraInfo
      })
    })
  }
  render() {
    return (
      <div className="main-content">
        <h1>{this.state.pageTitle}</h1>
        <p>{this.state.extraInfo}</p>
        { this.state.products.map(item => {
          return <Product
          image={item.mainImage.ref}
          id={item.id}
          name={item.name}
          price={item.maxPrice} />
        })}
      </div>
    );
  }
}
