// code away!
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

const server = express();

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);

  next();
}

server.use(logger);
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h1>WebAPI III Challenge</h1>`);
});

const port = 4000;
server.listen(port, () =>
  console.log(`\n*** Server running on http://localhost:${port} ***\n`),
);
