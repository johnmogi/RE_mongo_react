const dal = require("../data-access-layer/dal");
const Worker = require("../models/worker");

dal.connectAsync()
    .then(db => console.log("We're connected to " + db.name + " on MongoDB."))
    .catch(err => console.log(err));

function addWorkerAsync(worker) {
    return worker.save();
}

function getAllWorkersAsync() {
    return new Promise((resolve, reject) => {
        Worker.find({}, (err, workers) => { // {} = החזר את כל המוצרים
            if (err) {
                reject(err);
                return;
            }
            resolve(workers);
        });
    });
}


module.exports = {
    addWorkerAsync,
    getAllWorkersAsync
}