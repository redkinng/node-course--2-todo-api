const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59d3e59cd8a36501789b5ee6';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
};

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   if(todos){
//     return console.log('Not able to find records');
//   }
//   console.log('Todos', todos)
// });
//
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
Todo.findById(id).then((todo)=>{
  if(!todo){
    console.log('not able to find ID');
    return;
  }
  console.log('todo', todo);
}).catch((e)=>{console.log('id not valid')})
