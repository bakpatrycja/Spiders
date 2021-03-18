import * as Sequelize from 'sequelize';
import db from '../db';

export interface TokenInterface {
  id?: number;
  belongsTo: number;
  token: string;
  createdAt?: string;
  updatedAt?: string;
}

const Token = db.define('tokens', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  belongsTo: Sequelize.INTEGER,
  token: Sequelize.STRING,
  createdAt: Sequelize.DATE
});

export default Token;