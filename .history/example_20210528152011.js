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
  const li = $("<li><input id='lishka' type='checkbox'> <span> <img src='icon.png' ></img></span><"+DeskTaskInput.val()+"</li>")

  li.on('click', function (event) {
    TodoList.checked = !TodoList.checked;
  });

  $('#todo').append(li) 


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

console.log($('li'))

$('li').on('click', function (event) {
  console.log(event.currentTarget);
});


/*function dell(event){
chbox=document.getElementById('lishka');
console.log(event.target);
if (chbox.checked) {
  TodoList.splice(i,0)
}
else{}
} */

/*function dell(){
  if (TodoList[i]= checked)
    {TodoList.splice(i,0)}
    else {}
  
}*/
/*() {if TodoList[i] == checked {}
if (DeskTaskInput=checked) {$('#test').prop('disabled', true);}*/
/*
$('#btn-on').click(function(){
	$('body input:checkbox').prop('checked', true);
});
$('#btn-off').click(function(){
	$('body input:checkbox').prop('checked', false);
});
if (checked=) */