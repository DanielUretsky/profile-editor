const express = require('express');
const app = express();
const PORT = 3000;

//configs
// create connection

//middlewares
app.use(express.json());

//routes
app.use('/users', (req, res) => {
    res.send("Оля крыс")
})

//listen
app.listen(PORT, () => {
    console.log(`Server is running. http://localhost:${PORT}`);
})