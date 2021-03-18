import { Sequelize } from 'sequelize';

require('dotenv').config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    port: Number(process.env.DB_PORT),
  },
);

export default db;
