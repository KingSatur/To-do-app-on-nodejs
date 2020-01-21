const argv = require('./config/yargs').argv
const colors = require('colors')

let command = argv._[0]

const listToDo = require('./taskToDo/toDo')

switch(command){
    case 'create':
        let task = listToDo.create(argv.tD)
        console.log(task)
    break

    case 'list':
        let list = listToDo.getList()    
        list.forEach(task => {
            text = `The task is: ${task.description} and completed is:${task.completed}`
            console.log(text.blue)
        })
    break

    case 'update':
        let update = listToDo.update(argv.tD, argv.c)
        console.log(update)
    break

    case 'delete':
        listToDo.remove(argv.tD)
    break

}