const connectToMongo = require('./db');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

// Available Routers
app.use('/api/auth', require('./routes/auth'));
app.use('/api/prodsauth', require('./routes/productsauth'));
app.use('/api/categoriesauth', require('./routes/categoriesauth'));
app.use('/api/brandsauth', require('./routes/brandsauth'));

app.listen(port, () => {
    console.log(`GtoG Backend listening on port ${port}`);
});
