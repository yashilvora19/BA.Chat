const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.get('/', (req, res) => { res.send('Welcome to Ba.chat!'); });
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost/mern-stack-db');
// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
  });

const Todo = mongoose.model('Todo', todoSchema);

