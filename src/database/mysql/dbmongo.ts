const mongoose = require('mongoose');
require('dotenv').config();

export const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

export const uri = "mongodb+srv://root:"+process.env.DB_USER+"@cluster0.sm8oe.mongodb.net/exhibitions?retryWrites=true&w=majority&ssl=true";
const connector = mongoose.connect(uri, options);
export default connector;