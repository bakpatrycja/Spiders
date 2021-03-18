import * as express from 'express';
import SpiderRepo from '../repository/SpiderRepo';
import { addPrefix } from '../services/spiderNamePrefix';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const repo = new SpiderRepo();

  try {
    const spider = await repo.get(Number(id));
    return res.status(200).json(spider);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.get('/', async (_, res) => {
  const repo = new SpiderRepo();

  try {
    const collecton = await repo.getAll();
    return res.status(200).json(collecton);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.post('/', async (req, res) => {
  const { name, isPet } = req.body;

  const repo = new SpiderRepo();

  if (!name || !isPet) {
    return res.status(400).json({
      message: `Parameters are not provided`,
    });
  }

  try {
    const spiderName = addPrefix(name);
    await repo.create({ name: spiderName, isPet });

    return res.status(201).json({
      name,
      isPet,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, isPet } = req.body;

  const repo = new SpiderRepo();

  try {
    await repo.update(Number(id), { name, isPet });

    return res.status(200).json({
      name,
      isPet,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const repo = new SpiderRepo();

  try {
    await repo.delete(Number(id));

    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

export default router;
