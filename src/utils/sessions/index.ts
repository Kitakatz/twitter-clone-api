import { DateTime } from 'luxon';
import { mySQLConnection } from '../connect';
import { v4 as uuid } from 'uuid';

class SessionModel {
  async create(ID: string): Promise<any> {
    const connection = await mySQLConnection();

    const id: string = uuid();
    const userID: string = ID;
    const time = DateTime.now(); 
    const schedule = time.plus({ days:7 }).toISO();
    const timeToLive = schedule;
    
    await connection.query('INSERT INTO session (id, userID, timeToLive) VALUES(?, ?, ?)', [id, userID, timeToLive]);
    
    //@ts-ignore
    // const eventName: string = id.replaceAll('-','');
 
    // await connection.query(`CREATE EVENT IF NOT EXISTS ${eventName} ON SCHEDULE AT DATE_ADD( NOW(), INTERVAL 1 MINUTE ) DO DELETE FROM session WHERE id = ?`, [id]);
    return {
      id: id
    };
  };

  async get(ID: string): Promise<any> {
    const connection = await mySQLConnection();

    const [session] = await connection.query<any>(`SELECT * FROM session WHERE id = ?`, [ID]);

    return session[0];
  };

  async delete(ID: string): Promise<any> {
    const connection = await mySQLConnection();

    await connection.query<any>(`DELETE FROM session WHERE id = ?`, [ID]);
  };
};

export default SessionModel;


// make client avaible to make api requests while session is avaible
// client be aware that the session is going to expire