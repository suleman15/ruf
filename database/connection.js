const mongoose = require("mongoose");

async function connectDatabase() {
  await mongoose.connect('mongodb+srv://sulemanahmed27048:neon123@cluster0.otnrxs3.mongodb.net/movies').then(() => console.log('DB has been Connected')).catch(err => console.log(err.message))
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = connectDatabase; // default
// module.exports = {connectDatabase}// named export
