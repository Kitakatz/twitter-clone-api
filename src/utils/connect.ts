import mysql, { Connection } from 'mysql2/promise';

export const mySQLConnection = async (): Promise<Connection> => {
  const connection = await mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
  });

  return connection;
};