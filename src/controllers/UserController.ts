import * as express from 'express';
import UserRepo from '../repository/UserRepo';

const router = express.Router();

router.get('/getusersandtheirspiders', async (_, res) => {
  const repo = new UserRepo();

  try {
    const collecton = await repo.getUsersSpiders();
    return res.status(200).json(collecton);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.get('/', async (_, res) => {
  const repo = new UserRepo();

  try {
    const collecton = await repo.getAll();
    return res.status(200).json(collecton);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.post('/', async (req, res) => { // dziala ! <3
  const { name, surname, age } = req.body;

  const repo = new UserRepo();

  if (!name || !surname || !age) {
    return res.status(400).json({
      message: `Some parameters are missing`,
    });
  }

  try {
    await repo.create({ name: name, surname: surname, age: age })
    return res.status(201).json({
      name,
      surname,
      age,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.put('/:id', async (req, res) => { // dziala ! <3
  const { id } = req.params;
  const { name, surname, age } = req.body;
  const repo = new UserRepo();
  try {
    await repo.update(Number(id), { name, surname, age });
    return res.status(200).json({
      name,
      surname,
      age,
    }); 
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.delete('/:id', async (req, res) => { // działa ! <3
  const { id } = req.params;
  const repo = new UserRepo();

  try {
    await repo.delete(Number(id));
    return res.status(200).end();
  } catch (err) {
    console.log(err)
    return res.status(500).end();
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const repo = new UserRepo();
  try {
    const user = await repo.get(Number(id));
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
 }
});

export default router;