import * as express from 'express';
import ExhibitionRepo from '../repository/ExhibitionsRepo';

const router = express.Router();

router.get('/', async (_, res) => {  // działa
    const repo = new ExhibitionRepo();
  
    try {
      const collecton = await repo.getAll();
      return res.status(200).json(collecton);
    } catch (err) {
      console.log(err);
      return res.status(500).end();
    }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const repo = new ExhibitionRepo();

  try {
    const spider = await repo.get(id.toString());
    return res.status(200).json(spider);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});


router.post('/', async (req, res) => {
  const { name, start_date } = req.body;

  const repo = new ExhibitionRepo();

  if (!name || !start_date) {
    return res.status(400).json({
      message: `Parameters are not provided`,
    });
  }

  try {
    await repo.create({ name, start_date });

    return res.status(201).json({
      name,
      start_date,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const repo = new ExhibitionRepo();

  try {
    await repo.delete(id.toString());
    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, start_date } = req.body;

  const repo = new ExhibitionRepo();

  try {
    await repo.update(id.toString(), { name, start_date });

    return res.status(200).json({
      name,
      start_date,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});


  
  export default router;