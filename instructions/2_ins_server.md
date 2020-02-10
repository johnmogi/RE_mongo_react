**{{this file is for mongo! recreate for sql + json}}**
0. create the follwong folders:

business-logic-layer // fetch data with functions 
( get all/ getone, route.put etc)
controllers // {controllers for CRUD upon data} _products-controller 
// {needs the product logic, product and the router- does router get etc}

data-access-layer // db connection 
models // classes for base models
app.js // routing and execution

1. npm i express cors joi mongoose (/mysql)

2. file app.js:
const express = require("express");
const cors = require("cors");
const server = express();
// const productsController = require("./controllers/products-controller");
server.use(cors());
server.use(express.json());
// server.use("/api/products", productsController);
server.listen(3000, () => console.log("Listening on http://localhost:3000"));


**{build  base files - controller, dal, etc.}**

{product controller:}

const express = require("express");
const productsLogic = require("../business-logic-layer/products-logic");
const Product = require("../models/product");
const router = express.Router();

// GET http://localhost:3000/api/products
router.get("/", async (request, response) => {
    try {
        const products = await productsLogic.getAllProductsAsync();
        response.json(products);
    }
    catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
});


module.exports = router;

{worker-logic.js}
const dal = require("../data-access-layer/dal");
const Product = require("../models/product");

dal.connectAsync()
    .then(db => console.log("We're connected to " + db.name + " on MongoDB."))
    .catch(err => console.log(err));

function addProductAsync(product) {
    return product.save();
}

function getAllProductsAsync() {
    return new Promise((resolve, reject) => {
        Product.find({}, (err, products) => { // {} = החזר את כל המוצרים
            if (err) {
                reject(err);
                return;
            }
            resolve(products);
        });
    });
}


module.exports = {
    addProductAsync
}

{dal.js}:

const mongoose = require("mongoose");

// MongoDB-התחברות אסינכרונית ל
function connectAsync() {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://localhost:27017/Northwind",
            { useNewUrlParser: true, useUnifiedTopology: true }, (err, mongo) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(mongo);
            });
    });
}

module.exports = {
    connectAsync
};