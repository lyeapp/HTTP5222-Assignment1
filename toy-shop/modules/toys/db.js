const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

const ToySchema = new mongoose.Schema({
  name: {type:String,required:true},
  description: {type: String,required:true},
  price: {type:Number,required:true},
});

const Toy = mongoose.model("Toy", ToySchema);

async function connect() {
  await mongoose.connect(dbUrl);
}

async function getToys() {
  await connect();
  return await Toy.find({});
}

//get toy by id
async function getToyById(id){
  await connect();
  return await Toy.findById(id);
}



module.exports = {
  connect,
  getToys,
  getToyById,

};

