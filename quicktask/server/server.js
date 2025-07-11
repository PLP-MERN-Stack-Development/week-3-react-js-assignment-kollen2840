const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');
const routes = require('./Routes/TaskRoutes');
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/', routes);

const PORT = 5000;

app.listen(PORT, ()=> console.log(`Server Running at http://localhost:${PORT}`));

