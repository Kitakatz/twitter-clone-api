import { User } from '../../schema/User';
import { mySQLConnection } from '../connect';
import { RowDataPacket } from 'mysql2';

class UserModel {
  async createUser(user: User, hashedPassword: string) {
    const connection = await mySQLConnection();

    await connection.query<User[] & RowDataPacket[]>(
      `INSERT INTO users (id, firstName, lastName, email, phone, username, password) VALUES( ?, ?, ?, ?, ?, ?, ? )`, 
      [ user.id, user.firstName, user.lastName, user.email, user.phone, user.username, hashedPassword ]
    );
  };

  async getUser(username: string) {
    const connection = await mySQLConnection();

    const [users] = await connection.query<any>('SELECT * FROM users WHERE users.username = ?', [username]);

    return users[0];
  };
};

export default UserModel;