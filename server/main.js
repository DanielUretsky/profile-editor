require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const connectToDB = require('./configs/connectToDB');

const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');

//configs
connectToDB();

//middlewares
app.use(express.json());

//routes
app.use('/', authRouter);
app.use('/user', userRouter);

//listen
app.listen(PORT, () => {
    console.log(`Server is running. http://localhost:${PORT}`);
})