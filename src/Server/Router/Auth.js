const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

require('../Data/Conn')
const User = require('../Models/UsersSchema')
const Product = require('../Models/ProductsSchema')

router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log("BODY - ", req.body);

        if (!username || !password) {
            return res.status(400).json({ message: "empty field" })
        }

        const userLogin = await User.findOne({ username: username, password: password })
        if (!userLogin) {
            res.status(400).json({ message: "Sign In Not Successful" })
        }
        else {
            res.status(200).json(userLogin)
        }

    }
    catch (err) {
        console.log(err);
    }
})

router.get('/products', async (req, res) => {
    try {
        Product.find({}, async (err, products) => {
            if (err) {
                console.log("erroe:- ", err);
            }
            res.status(200).json(products)
        })
    }
    catch (err) {
        console.log("Error");
    }
})

module.exports = router