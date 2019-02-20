// const products = [];
const fs = require('fs');
const path = require('path');
const rootpath = require('../util/path');
const p = path.join(rootpath, 'data', 'products.json');

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    console.log('data', data);
    if (err) return cb([]);
    return cb(JSON.parse(data));
  });
}

module.exports = class Product {
  constructor(_title) {
    this.title = _title;
  }
  save() {
    this.getProductsFromFile(products =>{
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) { // by using static, this doesn't change any private values of this class
    return getProductsFromFile(cb);
  }
};