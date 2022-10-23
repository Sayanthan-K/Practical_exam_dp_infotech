const mongoose = require("mongoose");

const mongoDbUrl =
  "mongodb+srv://Sayanthan:saya1234@cluster0.fz8hmnl.mongodb.net/Employee?retryWrites=true&w=majority";

let _db;

const initDb = (callback) => {
  if (_db) {
    return callback(null, _db);
  }
  mongoose
    .connect(mongoDbUrl)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Database not initialzed");
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
