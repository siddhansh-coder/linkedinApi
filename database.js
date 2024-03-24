const mysql = require('mysql');

// Create a connection pool to the MySQL server
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust as needed
  host: 'localhost',
  user: 'root',
  password: 'MySql@1234',
  database: 'sessions'
});

// Function to establish a connection to the MySQL server
async function connectMySql() {
  try {
    const connection = await getConnection();
    console.log('Connected to MySQL server as id ' + connection.threadId);
    return connection;
  } catch (err) {
    console.error('Error connecting to MySQL server:', err);
    throw err; // Rethrow the error to be handled elsewhere
  }
}

// Function to get a connection from the pool
function getConnection() {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
}

// Function to insert data into the MySQL server
async function dataToInsert(UserSessionForUser) {
  const data = {
    username: UserSessionForUser.username,
    numberOfTimesLoggedIn: UserSessionForUser.numberOfTimesLoggedIn,
    LastLogin: UserSessionForUser.lastLogin,
    activity: UserSessionForUser.activity,
    created_at: UserSessionForUser.createdAt,
    last_updated: UserSessionForUser.updatedAt
  };

  try {
    const connection = await connectMySql();
    connection.query('INSERT INTO userSessions SET ?', data, (err, rows) => {
      if (err) {
        console.error('Error executing query:', err);
      } else {
        console.log('Data inserted into MySQL server:');
        console.log(rows);
      }
      connection.release(); // Release the connection back to the pool
    });
  } catch (err) {
    console.error('Error:', err);
  }
}

// Function to disconnect from the MySQL server
async function disConnectMysql() {
  try {
    pool.end((err) => {
      if (err) {
        console.error('Error closing connection:', err);
      } else {
        console.log('Connection closed.');
      }
    });
  } catch (err) {
    console.error('Error:', err);
  }
}

module.exports = { connectMySql, dataToInsert, disConnectMysql };