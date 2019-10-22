const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_login');

app.use(require('express-session')({
  secret: process.env.SECRET || 'word',
  resave: false,
  saveUninitialized: true
}));
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));

const User = conn.define('user', {
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

const syncAndSeed = async()=> {
  await conn.sync({ force: true });

  const [moeUser, lucyUser] = await
    Promise.all([
      User.create({
        email: 'moe@grumpy.com',
        password: 'hmph'
      }),
      User.create({
        email: 'lucy@pleasant.com',
        password: 'namaste'
      })
    ]);

    const users = await User.findAll();
};

const users = {
  moe: {
    id: 1,
    name: 'moe',
    favoriteWord: 'foo'
  },
  lucy: {
    id: 2,
    name: 'lucy',
    favoriteWord: 'bar'
  }
};

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.post('/api/sessions', (req, res, next)=> {
  console.log(req.body)
  const user = users[req.body.username];
  if(user){
    req.session.user = user;
    return res.send(user);
  }
  next({ status: 401 });
});

app.get('/api/sessions', (req, res, next)=> {
  const user = req.session.user;
  console.log('user', user)
  if(user){
    console.log(user)
    return res.json(user);
  }
  next({ status: 401 });
});

app.delete('/api/sessions', (req, res, next)=> {
  req.session.destroy();
  res.sendStatus(204);
});

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});
