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
    .then(products => {
      self.setState({
        pageTitle: products.pageTitle,
        products: products.products,
        extraInfo: products.extraInfo
      })
    })
  }

  _sort(e){
    e.preventDefault();
    let filterParameter = e.target.value;
    let productsArr = this.state.products;
    productsArr.sort((a,b) => {
      return (a[filterParameter] > b[filterParameter]) ? 1 : ((b[filterParameter] > a[filterParameter]) ? -1: 0);
    });
    this.setState({products: productsArr});
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>{this.state.pageTitle}</h1>
          <p>{this.state.extraInfo}</p>
        </div>
        <div className="main-content">
          <span><strong>Sort By:</strong></span>
          <select onChange={this._sort.bind(this)}>
            <option value="null">Select</option>
            <option value="name">Name</option>
            <option value="maxPrice">Price</option>
            <option value="createdAt">Date</option>
          </select>
          { this.state.products.map(item => {
            let date = (new Date(item.createdAt)).toString();
            return <Product
            image={item.mainImage.ref}
            key={item.id}
            name={item.name}
            price={item.maxPrice}
            date={date} />
          })}
        </div>
      </div>
    );
  }
}
