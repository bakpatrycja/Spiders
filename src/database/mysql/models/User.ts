import * as Sequelize from 'sequelize';
import db from '../db';

export interface UserInterface {
  id?: number;
  name: string;
  surname: string;
  age: number;
  createdAt?: string;
  updatedAt?: string;
}

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  surname: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

export default User;
