import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import materialsController from './controllers/materials.js';


const app = express();

app.use(express.json());

app.use('api/v1/clothing-inventory', materialsController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
