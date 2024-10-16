const express = require('express');
const app = express();
const todo = require('./Routes/todo')
const connectDB = require('./DB/connect')

app.use(express.json())
app.get('hello',(req, res)=>{
	//
})
app.use('/api/v1/tasks',todo);

// app.get('/api/v1/todos') - get all todolist
// app.post('/api/v1/todos') - create a new item
// app.get('/api/v1/todos/:id') - get an item
// app.patch('/api/v1/todos/:id') - update an item
// app.delete('/api/v1/todos/:id') - delete an item

const port = 3000;



const start = async () => {
	try {
		await connectDB()
		app.listen(port, console.log(`Server is listening on port ${port}`))
	}catch (error) {
		console.log(error)
	}
}
start()
