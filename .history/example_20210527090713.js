let AddTaskBtn = document.getElementById('add');
let DeskTaskInput = document.getElementById('message');
let todo= document.getElementById('todo')

let TodoList = [];

AddTaskBtn.addEventListener('click', function() {
  let newTodo = {
    todo: DeskTaskInput.value,
    checked:false,
    important:false
  };
  TodoList.push(newTodo);
  console.log(TodoList);
});
function displayMessaged() {
  TodoList.forEach
}
$('.container').css('color', 'red')