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
  $('#todo').append("<input"+ DeskTaskInput.val()+"button class='del'>&#10006</button> </li>");
 /* $('#todo').append('<input onclick="deleted()" id="del" type="checkbox" checked>' + DeskTaskInput.val());*/
}
$('#add').on('click', function() {
  func();
});

$(document).on('keydown',function(e) {
  if(e.which == 13) {
 func();
}
});
DeskTaskInput.val();
$('.del').on('click',function(){
  var $parent = $(this).parent();
})
setTimeout(function() {
  $parent.remove();
}, 1000);