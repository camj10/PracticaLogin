const express = require('express');
const cors = require('cors')
require('./config/mongoose.config');

const controllers = require('./controllers')
const verifyToken = require("./middlewares/verifyToken");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/user", verifyToken, controllers.getUserById);
app.post('/register', controllers.register);
app.post('/login', controllers.login);

const puerto = 8000;
// app.use(express.urlencoded({ extended: true }));
// require('./routes/person.routes')(app);
app.listen(puerto, () => {
    console.log("Listening at Port " +puerto)
});