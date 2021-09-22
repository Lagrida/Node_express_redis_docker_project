const {
    MONGO_IP,
    MONGO_PORT,
    MONGO_USER,
    MONGO_PASSWORD
} = require('./config/config.js');

const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

// Import Routes
const indexRoutes = require("./routes/indexRoutes");
const postRoutes = require("./routes/postRoutes");

// Connect To mongoDB
const connectionStr = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/myapp?authSource=admin`;
const tryToConnect = () => {
    console.log('Trying To Connect to mongoDB....');
    mongoose.connect(connectionStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connection success....'))
    .catch(error => {
        console.log('MongoDB connection error....');
        setTimeout(tryToConnect, 10000);
    });
}
// Connect to mongoDB
tryToConnect();

// Express
const app = express();

// Middlewars
app.enable("trust proxy");
app.use(cors());
app.use(express.json());
//--------------------------------- Application Code ---------------------------------------

app.use("/api", indexRoutes);
app.use("/api/posts", postRoutes);

//---------------------------------- Run Application ---------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App start at port ${PORT}....`));