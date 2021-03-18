import * as express from 'express';
import UserRepo from '../repository/UserRepo';
import SpiderRepo from '../repository/SpiderRepo';
import ExhibitionRepo from '../repository/ExhibitionsRepo';

const router = express.Router();

router.get('/', async (_, res) => {
    const repoExhibition = new ExhibitionRepo();
    const repoSpider = new SpiderRepo();
    const repoUser = new UserRepo();
  // nie denerwuj sie xD 
  // test funkcjonalny
    try {
      const collectonEhxibition = await repoExhibition.getAll();
      const collectonUsers = await repoUser.getAll();
      const collectonSpiders = await repoSpider.getAll();
      let mergedCollection = {
          'users': collectonUsers,
          'spiders' : collectonSpiders,
          'exhibitions' : collectonEhxibition
      }

      return res.status(200).json(mergedCollection);
    } catch (err) {
      console.log(err);
      return res.status(500).end();
    }
});
  

export default router;