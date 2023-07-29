const mongoose = require('mongoose');
mongoose.set('strictQuery', false); 
mongoose.connect('mongodb://127.0.0.1/pruebatecnica', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));