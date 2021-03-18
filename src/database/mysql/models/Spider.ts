import * as Sequelize from 'sequelize';
import db from '../db';

export interface SpiderInterface {
  id?: number;
  name: string;
  isPet: boolean;
  belongsTo?: string;
  createdAt?: string;
  updatedAt?: string;
}

const Spider = db.define('spiders', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  isPet: Sequelize.BOOLEAN,
  belongsTo: Sequelize.STRING,
  createdAt: Sequelize.DATE,
});

export default Spider;
