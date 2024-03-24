const mysql = require('mysql');
// Create a connection to the MySQL server

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MySql@1234',
  database: 'sessions'
});


async function connectMySql()
{
  try{
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL server: ' + err.stack);
      return;
    }

    console.log('Connected to MySQL server as id ' + connection.threadId);
  });
}
catch(err)
{
  console.log(err);
}
}


async function dataToInsert(UserSessionForUser)
{
  const data = {username: UserSessionForUser.username , numberOfTimesLoggedIn: UserSessionForUser.numberOfTimesLoggedIn , LastLogin: UserSessionForUser.lastLogin, activity: UserSessionForUser.activity, created_at: UserSessionForUser.createdAt, last_updated: UserSessionForUser.updatedAt};

  console.log("this is console under datatoinsert .......   " + UserSessionForUser + "the data is " + data);
  connection.query('INSERT INTO userSessions SET?',data, (err, rows) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      return;
    }

    console.log('Data inserted into  MySQL server:');
    console.log(rows);
  });



}


async function disConnectMysql()
{

  connection.end((err) => {
    if (err) {
      console.error('Error closing connection: ' + err.stack);
      return;
    }
  
    console.log('Connection closed.');
  });
}





module.exports = {connectMySql,dataToInsert,disConnectMysql}