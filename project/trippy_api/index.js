require('dotenv').config();

const { PORT, DB_HOST, DB_NAME, DB_PORT } = process.env;

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const HTTPBearerStrategy = require('passport-http-bearer').Strategy;

const homeController = require('./controllers').home;
const hotelsRoute = require('./routes').hotels;
const roomsRoute = require('./routes').rooms;
const usersRoute = require('./routes').users;
const favoritesRoute = require('./routes').favorites;
const adminRoute = require('./routes').admin;

const UserModel = require('./models').User;

const app = express();

const port = PORT || 3000;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Enable CORS
app.use(cors());
// Protects the server from HTTP vulnerabilities
app.use(helmet());
// Serveur responses (> 1024 bytes) will be compressed to GZIP format to reduce response size
app.use(compression());
app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passReqToCallback: true,
      session: false
    },
    UserModel.authenticateLocal()
  )
);

// bearer is used to authenticate via a token
passport.use(new HTTPBearerStrategy(UserModel.authenticateBearer())); // `authenticateBearer` has been declared in the User Model

app.get('/api/home', homeController.getHome);

app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/favorites', favoritesRoute);

app.use('/admin', adminRoute);

app.listen(port, process.env.HOST, () => {
  console.log('Server started on port', port);
});
