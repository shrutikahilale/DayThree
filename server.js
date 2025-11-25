import express from "express";
import routes from './route.js';
import connectDb from './mongo.js';

await connectDb();
const app = express();

app.use(express.json());

app.use('', routes)

app.listen(3000, () => console.log('listening at port 3000'));