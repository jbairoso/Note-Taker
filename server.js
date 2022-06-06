//require express
const express = require("express");
const app = express();

//using port
const PORT = process.env.PORT || 3001;

//parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
