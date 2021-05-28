let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
i=-1;
let chbox;  

let TodoList = [];
  function func() {
  let newTodo = {
  todo: DeskTaskInput.val(),
  checked:true,
  };
  
  TodoList.push(newTodo);
  i++;
  console.log(TodoList);
  $('#todo').append('<input id="lishka" type="checkbox" checked>' + DeskTaskInput.val());
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
function dell(event){
chbox=document.getElementById('lishka');
console.log(event);
if (chbox.checked) {
  TodoList.splice(i,0)
}
else{}
}

/*function dell(){
  if (TodoList[i]= checked)
    {TodoList.splice(i,0)}
    else {}
  
}*/
/*() {if TodoList[i] == checked {}
if (DeskTaskInput=checked) {$('#test').prop('disabled', true);}*/