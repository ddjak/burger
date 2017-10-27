var mysql = require("mysql");

// Setting up our connection information
var source = {
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Le0nard0DaV!nc1",
    database: "burgers_db"
  }
};

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "wpiypy07g22xg2vq",
    password: "cew2sb1airaedmq2",
    database: "z5jdvgja6e9spq8z"
  });
};

// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;