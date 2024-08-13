/// this file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://taskmangermern:CVnCxj6sF+@*Qma@cluster0.021erdh.mongodb.net/test', { useNewUrlParser: true }).then(()=>{
    console.log('Connected to MongoDB successfully :');
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

//to prevent deprectation warnings (from MongoDB native driver)
// mongoose.set(use, true);
// mongoose.set(useFindAndModify, false);

module.exports ={
    mongoose
};