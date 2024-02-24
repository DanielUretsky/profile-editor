require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const connectToDB = require('./configs/connectToDB');

const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');
const productsRouter = require('./router/productsRouter');

//configs
connectToDB();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/', authRouter);
app.use('/users', userRouter);
app.use('/products', productsRouter);

//listen
app.listen(PORT, () => {
    console.log(`Server is running. http://localhost:${PORT}`);
})