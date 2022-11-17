import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {

    const app = express();
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    const port = 3000;

    app.listen(port, () => {
      console.log(`Service is running on http://localhost:${port}`);
    });
  })
  .catch(err => console.log(err));
