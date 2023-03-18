const app = require('./app');
require('dotenv').config()
// const { connectToMongoDb } = require('./db/mongodb')

const logger  = require('./logger');

const PORT = process.env.PORT || 3131;

//Connecting to MongoDB
// connectToMongoDb();


app.listen(PORT, () => {
    logger.info(`Running on PORT ${PORT}`);
});
