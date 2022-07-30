import express from 'express';

import 'express-async-errors';

import ProductsRoutes from './routes/products.routes';

import UsersRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(ProductsRoutes);

app.use(UsersRoutes);

export default app;
