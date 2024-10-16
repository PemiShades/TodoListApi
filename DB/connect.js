const mongoose = require('mongoose');
const URI = "mongodb+srv://username:password@cluster0.bvgyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log('hello')
const connectDB = () => {
	return mongoose.connect(URI, {
	// useNewUrlParser: true,
	// useCreateIndex: true,
	// useFindAndModify: false,
	// useUnifiedTopology: true,
	});
}

module.exports = connectDB;