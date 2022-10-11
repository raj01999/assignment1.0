const mongoose = require("mongoose");

const DB =
  "mongodb+srv://raj01999:sus01999@cluster0.kj9b6.mongodb.net/assignment?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
}

module.exports = main;
