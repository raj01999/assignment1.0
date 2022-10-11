const connectDB = require("./connections/connectDB");
const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/postRoutes");

const PORT = process.env.PORT || 8000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", postRouter);

app.get("/", (req, res) => {
    res.json({
        status: "Server is Running",
    });
});

app.listen(PORT, () => {
    console.log("Server is running ...");
});
