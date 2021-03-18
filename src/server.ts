import * as express from 'express'; 
import * as bodyParser from 'body-parser'; 
import * as cors from 'cors'; 
import * as  cookieParser from 'cookie-parser';
import mysql from './database/mysql/db'; 
import SpiderController from './controllers/SpiderController'; 
import UsersController from './controllers/UserController';
import ExhibitionController from './controllers/ExhibitionController';
import MergeController from './controllers/MergeController';
import AuthenticationController from './controllers/AuthenticationController'
require('dotenv').config(); 

export const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors()); 
app.use(cookieParser()); 

app.get('/healthcheck', async (_, res) => { 
  try { 
    await mysql.authenticate(); 
    return res.status(200).json({ 
      database: 'OK',
    });
  } catch (err) { 
    return res.status(500).json({ 
      server: 'OK',
      database: 'DOWN',
    });
  }
});

app.get('/', (_, res) => { 
  res.status(200).send('My spider diary <3'); 
});

app.use('/merge', MergeController); 
app.use('/spiders', SpiderController);
app.use('/users', UsersController); 
app.use('/exhibitions', ExhibitionController); 
app.use('/authentication', AuthenticationController); 