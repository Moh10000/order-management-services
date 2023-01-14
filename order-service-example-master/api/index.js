import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './server/routes/CustomerRoutes';
import orderRoutes from './server/routes/OrderRoutes';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/orders', orderRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
