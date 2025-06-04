import mysql from "mysql2";

// Database connection configuration
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Tushar2002",
  database: "Banking",
});

export default pool.promise();
