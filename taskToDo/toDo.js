const fs = require('fs')

let listToDo = []

const create = (description) => {

    loadData()

    let toDo = {
        description,
        completed : false
    }

    listToDo.push(toDo)

    saveData().then(resolve => console.log(resolve)).catch(reject => console.log(reject))

    return toDo
}

const loadData = () => {
    // return new Promise((resolve, reject) => {

    //     fs.readFile('./data/data.json', error => {
    //         if(error){
    //             reject("There is an error")
    //         }
    //     })

    // })

    try {
        listToDo = require('../data/data.json')
    } catch (error) {
        listToDo = []
    }
    
}

const saveData = () => {
    
    let data = JSON.stringify(listToDo)

    return new Promise((resolve, reject) => {
        fs.writeFile(`./data/data.json`, data, error => {
            
            if(error){
                reject("There is an error")
            }
            else{
                resolve(`The data has been sucesfully saved`)
            }
        })
    })

}

const getList = () => {
    loadData()
    return listToDo
}

const update = (desc, completed = true) => {
    loadData()

    let index = listToDo.findIndex( task => {
        return task.description === desc
    })

    if(index >= 0){
        listToDo[index].completed = completed
        saveData()
        return true
    }
    else{
        return false
    }

}

const remove = (description) => {

    loadData()

    let index = listToDo.findIndex(task => {
        return task.description === description
    })

    listToDo.splice(index,1)
    saveData()

}

module.exports = {
    create,
    getList,
    update,
    remove
}