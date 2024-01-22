const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo=()=>{
  mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS:1000,
    family: 4,
  });
  console.log("connected to mongo");
}
module.exports = connectToMongo;