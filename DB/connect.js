const mongoose = require('mongoose');
const username = process.env.USERNAME
const password = process.env.PASSWORD
const URI = `mongodb+srv://${username}:${password}@cluster0.bvgyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = () => {
	return mongoose.connect(URI, {
	// useNewUrlParser: true,
	// useCreateIndex: true,
	// useFindAndModify: false,
	// useUnifiedTopology: true,
	});
}

module.exports = connectDB;