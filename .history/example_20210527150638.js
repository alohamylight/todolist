let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");

let TodoList = [];
function func() {  
  let newTodo = {
  todo: DeskTaskInput.val(),
  checked:true,
};
  
  TodoList.push(newTodo);
  console.log(TodoList);
  $('#todo').append('<input id="del" type="checkbox" ${TodoList:checked }>' + DeskTaskInput.val());
}
$('#add').on('click', function() {
  func();
});

$(document).on('keydown',function(e) {
  if(e.which == 13) {
 func();
}
});




$('#del').on('click', function(){
  if (checked=true) {
  remove('#del')
}
});