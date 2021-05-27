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
function func(text) {  
  let newTodo = {
  todo: text,
  checked:false,
  important:false
};
  TodoList.push(newTodo);
  console.log(TodoList);
}



$('#add').on('click', function() {
  const text = this.val();
  func(text)
});

function displayMessaged() {
  TodoList.forEach
}
$(document).on('keydown',function(e) {
  if(e.which == 13) {
 func();
}
});