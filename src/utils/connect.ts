import mysql, { Connection } from 'mysql2/promise';

export const mySQLConnection = async (): Promise<Connection> => {
  const connection = await mysql.createConnection({
    host     : process.env.JWT_HOST,
    user     : process.env.JWT_USER,
    password : process.env.JWT_PASSWORD,
    database : process.env.JWT_DATABASE
  });

  return connection;
};