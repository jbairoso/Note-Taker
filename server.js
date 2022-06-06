//require express 
const express = require ("express");


const PORT = process.env.PORT || 3001;
const app = express();

//routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.use (express.urlencoded({ extended: true }));
app.use (express.static('public'));
app.use (express.json());
app.use ('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen( PORT, () =>{
    console.log ('API server now on port ${PORT}!');
});