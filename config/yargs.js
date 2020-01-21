const argv = require('yargs')
.command('create', 'Create a task',{
    taskDescription: {
        demand:true,
        alias:'tD'
    }
} )
.command('update', 'Update a task', {
    taskDescription: {
        demand:true,
        alias:'tD'
    },
    completed: {
        demand:true,
        alias:'c'
    }
})
.command('delete', 'Delete a task', {
    taskDescription: {
        demand:true,
        alias:'tD'
    }
})
.command('help', 'Update task with a new description', {

})
.argv

module.exports = {
    argv
}