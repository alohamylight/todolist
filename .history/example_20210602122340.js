let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let chbox;  

let TodoList = [];
  function func() {

    let newTodo = {
      todo: DeskTaskInput.val(),
      checked: true
    };
  
  TodoList.push(newTodo);
  DeskTaskInput.val('');
  MyFunc();
};
//функциональное выражение
let func_delete = function()
{
TodoList.forEach(function(item){
  if ($('li').closest('li').attr('id') == id )}
  
};
//конец функцонального выражение
