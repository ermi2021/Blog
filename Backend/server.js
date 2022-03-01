const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB databse connection established successfully");
})

const postsRouter = require('./Routes/posts');

app.use('/posts', postsRouter);

app.listen(port, ()=>{
   console.log(`Server is running on port: ${port}`);
});