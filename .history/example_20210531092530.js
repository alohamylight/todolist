let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let i=-1;
let j=-1;
let chbox;  

let TodoList = [];
  function func() {
  let newTodo = {
  todo: DeskTaskInput.val(),
  checked:true,
  };
  
  TodoList.push(newTodo);
  i++;
  j++;
  console.log(TodoList);
  const li = $(`<li id="remove_all" class='item_${j}'><input id='lishka'  type='checkbox'> <span> <img src='icon.png'></img></span>`+DeskTaskInput.val()+`</li>`)

  li.on('click', function (event) {
    TodoList.checked = !TodoList.checked;
  });

  $('#todo').append(li);


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

$('#btn-on').click(function(){
	$('body input:checkbox').prop('checked', true);
});
$('#btn-off').click(function(){
  if($('item_${j}').is(':checked')) {
  $('item_${j}').remove('item_${j}');}
});
/*
if (checked=) */

function dell(){  
if ($('#').is(':checked')) {
 
  $(`.item_${j}`).remove(`.item_${j}`);
}
else {}
};


/* $('#btn-off').click(function(){
  if($('body input:checkbox').prop('checked', false);)
  $('#remove_all').remove('#remove_all');
});
*/
function dell(){
  if ($('#lishka').is(':checked')) {
   
    $(`item_${j}`).remove(`item_${j}`);
    
  }
  else {}
  };
