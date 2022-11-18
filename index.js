const express = require('express') 
const bodyParser = require('body-parser')
const app = express()
const port = 6000
const TodoController = require('./controllers/todoController')
const TODO_BASE_ROUTE = '/todo';
const todoController = new TodoController()


app.use(bodyParser.json())
app.get('/', (req, res) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get(TODO_BASE_ROUTE, todoController.getAll)
app.post(TODO_BASE_ROUTE,todoController.createTask)
app.put(TODO_BASE_ROUTE,todoController.update)
app.delete(TODO_BASE_ROUTE,todoController.delete)

//app.get('/testdb', async (req, res) => {
  //let call = await pool.query('select * from public.todolist')
  // console.log(call.rows)
  //res.json({
   // todo: call.rows
  //})
//})

//app.post('/testdb/tester', async (req, res) => {
 // let call = await pool.query('INSERT INTO public.todolist (id, task, done) VALUES($1, $2, $3)',
 // [req.body.id, req.body.task, req.body.done])
  //console.log(call)
  //res.json({
 //   "status": "Task Created"
 // })
//})

//app.delete('TODO_BASE_ROUTE', async (req, res) => {
  //let call = 
  //await pool.query('DELETE FROM public.todolist WHERE id = $1', [req.body.id])
  //console.log(call)
  //res.json({
  //"status": "Task Deleted"
 // })
//})

//app.put('TODO_BASE_ROUTE', async (req, res) => {
 // let call = await pool.query('UPDATE public.todolist SET task = $1, done = $2 WHERE id = $3',
  //[req.body.task, req.body.done, req.body.id])
  //console.log(call)
  //res.json({
   // "status": "Task Updated"
  //})
//})

//app.get('/testdb/filter', async (req, res) => {
  //let call = await pool.query('SELECT COUNT(*) as Total, count(done) filter (where done=false) as pending, count(done) filter (where done=true) as done FROM public.todolist')
  // console.log(call)

  //res.json({
    //"status": "Task filtered",
    //todo: call.rows
 // })
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})