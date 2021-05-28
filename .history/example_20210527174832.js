let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");

let TodoList = [];
function func() {  
  let newTodo = {
  todo: DeskTaskInput.val(),
  checked:false,
};
  
  TodoList.push(newTodo);
  console.log(TodoList);
  $('#todo').append('<input id="del" type="checkbox" checked>' + DeskTaskInput.val());
}
$('#add').on('click', function() {
  func();
});

$(document).on('keydown',function(e) {
  if(e.which == 13) {
 func();
}
});
$('.hover-edit-menu').on('click', '.remove-button', function(){
				var elem = $(this).closest('.item', '.todo-list');
				localStorage.removeItem("taskId_" + elem.attr("data-item"));
				elem.remove();
			});