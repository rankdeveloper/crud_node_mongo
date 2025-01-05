const express = require("express");
const router = require("./routes/user");
const productRouter = require("./routes/product");
const connectMongo = require("./connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectMongo();
app.use("/", router);
// app.use("/", productRouter);

app.listen(3000, () => {
  console.log("server is running at port : 3000");
});
