const express = require('express');
const app = express();
const cors = require('cors')
const puerto = 8000;

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/person.routes')(app);

app.listen(puerto, () => {
    console.log("Listening at Port " +puerto)
});