import mongoose from "mongoose";
function dbConnect() {
  mongoose
    .connect("mongodb://127.0.0.1/mern-crud")
    .then((result) => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log("database error \n" + error);
    });
}
export default dbConnect;
