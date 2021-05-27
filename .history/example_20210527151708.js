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
  $('#todo').append('<input onclick= id="del" type="checkbox" checked>' + DeskTaskInput.val());
}
$('#add').on('click', function() {
  func();
});

$(document).on('keydown',function(e) {
  if(e.which == 13) {
 func();
}
});




deleted){
  remove('#del'); };