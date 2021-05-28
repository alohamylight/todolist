let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
i=-1;

let TodoList = [];
  function func() {
  let newTodo = {
  todo: DeskTaskInput.val(),
  checked:false,
  };
  
  TodoList.push(newTodo);
  i++;
  console.log(TodoList);
  $('#todo').append('<input id="del" type="checkbox" checked>' + DeskTaskInput.val());
  console.log(TodoList[i]);
}
$('#add').on('click', function() {
  func();
});

$(document).on('keydown',function(e) {
  if(e.which == 13) {
 func();
}
});
function dell(){
  if{}
}
/*() {if TodoList[i] == checked {}
if (DeskTaskInput=checked) {$('#test').prop('disabled', true);}*/