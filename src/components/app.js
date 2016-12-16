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

  _filter(e){
    e.preventDefault();
    console.log('E',e.target.value)
    let filterParameter = e.target.value;
    let productsArr = this.state.products;
    console.log('filterparma', typeof(filterParameter))
    productsArr.sort((a,b) => {
      console.log('AFILTERPARAM', a[filterParameter]);
      return (a[filterParameter] > b[filterParameter]) ? 1 : ((b[filterParameter] > a[filterParameter]) ? -1: 0);
    });
    console.log('PRODUCTSARR', productsArr);
    this.setState({products: productsArr});

  }
  render() {
    return (
      <div className="main-content">
        <h1>{this.state.pageTitle}</h1>
        <p>{this.state.extraInfo}</p>
        <select onChange={this._filter.bind(this)}>
          <option value="name">Name</option>
          <option value="maxPrice">Price</option>
          <option value="createdAt">Date</option>
        </select>
        { this.state.products.map(item => {
          let date = (new Date(item.createdAt)).toString();
          return <Product
          image={item.mainImage.ref}
          id={item.id}
          name={item.name}
          price={item.maxPrice}
          date={date} />
        })}
      </div>
    );
  }
}
