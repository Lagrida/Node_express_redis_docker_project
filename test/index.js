const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT
} = require("../config/config")

const mongoose = require('mongoose');

// Connect To mongoDB
const connectionStr = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/myapp_test?authSource=admin`;
const tryToConnect = () => {
    console.log('Trying To Connect to mongoDB test....');
    mongoose.connect(connectionStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB test connection success....'))
    .catch(error => {
        console.log('MongoDB test connection error....');
        setTimeout(tryToConnect, 10000);
    });
}
// Connect to mongoDB
tryToConnect();

beforeEach(done => {
    mongoose.connection.collections.posts.drop();
    done();
})