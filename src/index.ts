import { app } from './server';

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);
});
