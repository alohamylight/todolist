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
};  
//конец функцонального выражение
