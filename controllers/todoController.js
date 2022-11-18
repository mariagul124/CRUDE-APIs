const TodoRepo = require('../repository/todoRepository')

class TodoController {
    async getAll(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.getAllTasks();
        response.json({
            todo: res.rows
        });
    }

    async createTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.createTaskRepo(request.body.id,
            request.body.task, request.body.done);

        response.json({
            "status": "Task created"
            })
    }
    async delete(request, response) 
    {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.deleteTaskRepo(request.body.id)

        response.json({
            "status": "Task Deleted"
            })
        }
    async update(request,response)
    {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.updateTaskRepo(request.body.id,
            request.body.task, request.body.done);

        response.json({
            "status": "Task Updated"
            })

}
  async count(request,response)
    {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.countTaskRepo(request.body.id,
            request.body.task, request.body.done);

        response.json({
            "status": "Task Updated"
            })
}
}

module.exports = TodoController;

