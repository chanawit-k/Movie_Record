const express = require('express');
const connectDB = require('./config/db')

const app = express();

// connect DB 
connectDB()

// Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/user' , require('./routes/users'));
app.use('/api/movie' , require('./routes/movies'));

const PORT = process.env.PORT || 5000; 

app.listen(PORT, ()=> console.log(`Server start on port ${PORT}`));