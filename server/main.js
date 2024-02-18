const express = require('express');
const app = express();
const PORT = 3000;

const connectToDB = require('./configs/connectToDB');

const loginRouter = require('./router/loginRouter');
const registrationRouter = require('./router/loginRouter');
const userRouter = require('./router/loginRouter');

//configs
connectToDB();

//middlewares
app.use(express.json());

//routes
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);

//listen
app.listen(PORT, () => {
    console.log(`Server is running. http://localhost:${PORT}`);
})