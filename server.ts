import express from 'express';
import router from './routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
