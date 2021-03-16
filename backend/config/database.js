const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'backend/config/config.env' });

const DB = process.env.DB_URI.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

const connectDatabase = () => {
    mongoose
        .connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then((con) => {
            console.log(
                `MongoDB Database connected with HOST: ${con.connection.host}`
            );
        });
};

module.exports = connectDatabase;
