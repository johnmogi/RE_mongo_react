const express = require("express");
const workersLogic = require("../business-logic-layer/products-logic");
const worker = require("../models/worker");
const router = express.Router();

// GET http://localhost:3000/api/products
router.get("/", async (request, response) => {
    try {
        const workers = await workersLogic.getAllWorkersAsync();
        response.json(workers);
    }
    catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
});


module.exports = router;