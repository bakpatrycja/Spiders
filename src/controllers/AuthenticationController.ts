import * as express from 'express';
const jwt = require('jsonwebtoken');
const path = require('path');
const router = express.Router();
const loginFilePath = path.join(__dirname, '..','login.html');
const verifyFilePath = path.join(__dirname, '..','verify.html');
import UserRepo from '../repository/UserRepo';
import TokenRepo from '../repository/TokenRepo';
import { createToken } from '../services/createToken';

router.get('/login', async (req, res) => {
    res.sendFile(path.join(loginFilePath));
});

router.get('/verify', async (req, res) => {
  res.sendFile(path.join(verifyFilePath));
});

router.post('/login', async (req, res) => {
    let  id  = req.body.user.id
    const repo = new UserRepo();
    const repoToken = new TokenRepo();
   
         try {
          const checkIfTokenExists = await repoToken.get(Number(id));
         if(!checkIfTokenExists) {
          try {

            const user = await repo.get(Number(id));
            const accessToken = createToken(user);
            await repoToken.create({ belongsTo: id, token: accessToken })
            res.cookie("jwt", accessToken)
            return res.status(201).send('New token for user is created.');
          } catch (err) {
            console.log(err);
            return res.status(500).end();
          }
         }
        } catch (err) {
          console.log(err);
          return res.status(500).end();
        }

      return res.status(200).send('Do you like sp00ders? :>');
   
});

router.post('/verify', async (req, res) => {
  let accessTokenFromCookie = req.cookies.jwt
  let payloadVerify = '';
  try{
      payloadVerify = jwt.verify(accessTokenFromCookie, process.env.ACCESS_TOKEN_SECRET)
      return res.status(200).send('Your token is valid.');
  }
  catch(e){
      return res.status(401).send()
  }
});

export default router;