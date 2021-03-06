import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';
import { createConnection } from 'typeorm';

const app = express();
createConnection();

app.use(bodyParser.json());
app.use(routes);

app.listen(3333);
console.log('Listening on port 3333.');
