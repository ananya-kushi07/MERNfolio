

const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://AnanyaGowda:1Advikaa@cluster0.ygqxz6p.mongodb.net/';


app.use(express.json());


const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, 
};


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));



app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
