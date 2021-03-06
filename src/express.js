import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import graphqlHTTP from 'express-graphql';
import schema from './schema/';
import mongoose from 'mongoose';
const cors=require('cors');
//var usersRouter = require('./routes/users');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

try{
  mongoose.connect('mongodb+srv://Cesta:Plattsburgh1@default-cluster-fxrpa.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true });
  console.log("Connecting to db");
}catch(error){
  console.log(error);
}
app.use(cors());
app.use('/',indexRouter);
//app.use('/users', usersRouter);
app.use('/api',graphqlHTTP({
  schema,
  graphiql:true 
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("MAYBE 404");
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;