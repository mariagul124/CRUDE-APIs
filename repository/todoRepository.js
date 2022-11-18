const pool = require('../dbcon')

class TodoRepo {

    async getAllTasks() {
        return await pool.query('select * from public.todoList');
    }

    async createTaskRepo(id, task, done) {
        return await pool.query(`INSERT INTO public.todolist (id, task, done) VALUES($1, $2, $3)`,
        [id, task, done]);
    }

    async deleteTaskRepo(id) {
        return await pool.query('DELETE FROM public.todolist WHERE id = $1', 
        [id]);
    }

    async updateTaskRepo(id, task, done)
    {
        return await pool.query('UPDATE public.todolist SET task = $1, done = $2 WHERE id = $3',
        [id, task, done]);


    }
    async countTaskRepo(id, task, done)
   {
    await pool.query('SELECT COUNT(*) as Total, count(done) filter (where done=false) as pending, count(done) filter (where done=true) as done FROM public.todolist',
    [id, task, done]);

    
}
}

module.exports = TodoRepo;