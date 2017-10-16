const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "19ZoSo99",
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs();
  queryDanceSongs();
});
function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].item-id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_qantity);
    }
    console.log("-----------------------------------");
  });
}
function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item-id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_qantity);
    }
  });
  // logs the actual query being run
  console.log(query.sql);
}