import express from 'express';
import config from './config';
import productsRouter from './routes/products.routes';

const app = express();


//configuracion del puerto

app.set('port', config.port);

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(productsRouter);
export default app;