import mysql from 'mysql2';
import dotenv from 'dotenv';
// import { ITask } from './types/index';

dotenv.config();

export class DBQuery {
    constructor(private dbConn: any) {
        this.dbConn = mysql.createPool({
            host: process.env.HOST,
            user: process.env.DB_USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
        }).promise();
    }
    public async call (query: string) {
        try {
            const res = await this.dbConn.query(query).then((res: Object[]) => res[0]);
            this.dbConn.INSERT
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
        finally {
            this.dbConn.end();
        }
    }
    public insert<T>(table: string, insertObj: T) {
        const query = `INSERT INTO ${table} SET ` + this.dbConn.escape(insertObj);
        this.call(query);
    }
};

// new DBQuery(mysql).insert<ITask>('tasks', obj);
// new DBQuery(mysql).call('SELECT * FROM tasks');