const mysql = require("MySQL");
const inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "19ZoSo99",
  database: "bamazon"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  queryAllProducts();
});
queryAllProducts = () => {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {console.log(res[i].item-id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_qantity);
    }
    console.log("-----------------------------------");
  });


itemSearch = () => {
  inquirer
    .prompt({
      name: "product",
      type: "input",
      message: "What item number would you like?"
    })
    .then(function(answer) {
      console.log(answer.product);
      connection.query("SELECT * FROM products WHERE item_id=?", { item_id: answer.itemNum }, function(err, res) {
        console.log(res[i].item-id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_qantity)
        ;
            runSearch();
      });
    });
  }
}
  
