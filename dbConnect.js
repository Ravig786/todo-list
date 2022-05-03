const mongoose = require("mongoose");

async function createConnectionOne(index) {
  const db1 = await mongoose
    .connect("mongodb://localhost/todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected todo");
      // var names = [];
      // //console.log(mongoose);
      // var collections = mongoose.connections[index].collections;
      // Object.keys(collections).forEach(function (k) {
      //   names.push(k);
      // });

      // console.log(names);
    })
    .catch((error) => {
      console.log(error);
    });
}

mongoose.connection.on("connected", () => {
  console.log("Moongoose Connected to db..");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", (err) => {
  console.log("Connection is disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose connection is disconnected due to app termination");
    process.exit(0);
  });
});

createConnectionOne(0);

module.exports = mongoose;
