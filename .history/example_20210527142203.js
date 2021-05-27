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
function func() {  
  let newTodo = {
  todo: DeskTaskInput.val(),
  checked:false,
  important:false
};
  
  TodoList.push(newTodo);
  console.log(TodoList);
  $('#todo').append("<li type="checkbox">" +DeskTaskInput.val()+"</li>");
}



$('#add').on('click', function() {
  func();
});

function displayMessaged() {
  TodoList.forEach
}
$(document).on('keydown',function(e) {
  if(e.which == 13) {
 func();
}
});
