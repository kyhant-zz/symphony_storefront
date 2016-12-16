import React, { Component } from 'react';
import { getProducts } from '../models/products.js';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    let self = this;
    getProducts()
    .then(function(products){
      console.log('response',products)
      self.setState({products})
    })
  }
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}
