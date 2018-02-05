'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'title price slug'); 
    return Product
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags')
    return res;
}

exports.getById = async(id) => {
    const res = await Product 
        .findById(id);
    return res;
}

exports.getByTag = async(tag) => {
    const res = Product 
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    return product.save()
}

exports.update = async(id, data) => {
    await Product
    .findByIdAndUpdate(id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug
        }
    });
} 

exports.delete = async(id) => {
    await Product
    .findOneAndRemove(id)
}