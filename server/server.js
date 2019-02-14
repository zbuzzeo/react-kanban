const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const redis = require('connect-redis')(session);

const routesBoard = require('./routes/board');

const PORT = process.env.PORT || 8080;
const REDIS_HOST_PORT = process.env.REDIS_HOST_PORT || 6379;
const ENV = process.env.development || 'development';
const SESSION_SECRET = process.env.SESSION_SECRET || 'keyboard cat';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  store : new redis({ url : `redis://redis-server:${REDIS_HOST_PORT}`, logErrors : true }),
  secret : SESSION_SECRET,
  resave : false,
  saveUninitialized : false,
  cookie : { secure : ENV === 'production' }
}));

app.use(express.static('public'));

// PassportJS: write these in before all of the routes are installed so that all routes have sessions sitting in front of it.
app.use(passport.initialize());
app.use(passport.session());

// serializeUser happens after login
passport.serializeUser((user, done) => {
  console.log('serializing');
  return done(null, {
    id : user.id,
    username : user.username
  });
});

// deserializeUser happens after every request
passport.deserializeUser((user, done) => {
  console.log('deserializing');
  new user({ id : user.id }).fetch()
    .then(user => {
      user = user.toJSON();
      return done(null, {
        id : user.id,
        username : user.username
      });
    })
    .catch((err) => {
      console.log(err);
      return done(err);
    })
});

// basic routes that do not need their own file...
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { next(); }
  else { res.redirect('/'); }
}

app.get('/secret', isAuthenticated, (req, res) => {
  // the req.user is all of the deserializedUser information
  console.log('req.user: ', req.user);
  console.log('req.user.id', req.user.id);
  console.log('req.username', req.user.username);
  res.send('you found the secret!');
});

app.use(routesBoard);

app.listen(PORT, () => {
  console.log(`listening in on port: ${PORT}`);
})
