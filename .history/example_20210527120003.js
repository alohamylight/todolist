let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");

let TodoList = [];
/*
AddTaskBtn.addEventListener('click', function() {
  let newTodo = {
    todo: DeskTaskInput.value,
    checked:false,
    important:false
  };
  TodoList.push(newTodo);
  console.log(TodoList);
});
*/

$("#add").on('click', function(){  
  let newTodo = {
  todo: DeskTaskInput.value,
  checked:false,
  important:false
};
  TodoList.push(newTodo);
  console.log(TodoList);
})

function displayMessaged() {
  TodoList.forEach
}
$("#add").on('keydown',function(e) {
  if(event.which == 13) {
    function(){  
      let newTodo = {
      todo: DeskTaskInput.value,
      checked:false,
      important:false
    };
      TodoList.push(newTodo);
      console.log(TodoList);
  }
});