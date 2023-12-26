//file

const fs = require('fs')

//reading a file

// let fileContent = fs.readFileSync('f1.txt')

// console.log('data of file 1-> ' + fileContent)

//writing in a file

// fs.writeFileSync('f2.txt' , 'This is file f2')

// console.log('File has been written')

// fs.appendFileSync('f3.txt' , 'this is updated data')

// console.log('file has been appended')

//delete file

// fs.unlinkSync('f2.txt')

// console.log('file has been deleted')

//create directory

// fs.mkdirSync('myDirectory')

//check the content inside of a directory

// let folderPath = 'F:\\The ultimate node course\\myDirectory'

// let folderContent = fs.readdirSync(folderPath)

// console.log("folder content" , folderContent)

//check whether dir exixt or not

// let doesExist = fs.existsSync('myDirectory')

// console.log(doesExist)

//remove dir

 fs.rmdirSync('myDirectory')

 console.log('file has been deleted')