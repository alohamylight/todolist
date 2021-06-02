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

function MyFunc(){
  $('#todo').html("");
  TodoList.forEach(function(item){
  let OurTask=
    `<li>
      <input type='checkbox' id='item_${Date.now()}' ${item.checked ? 'checked': ''}> 
      <span class="tasks-list-container ">${item.todo}</span>
    </li>`;

  $('#todo').append(OurTask);
  
});
$('input').on('click', function (event) {
  var id = $(this).attr('id');
  console.log(id);
});
};


$('#btn-on').click(function(){
	$('body input:checkbox').prop('checked', true);
});

$('#btn-off').click(function(){
  if($(`#item_${Date.now()}`).is(':checked')){
  $(`#item_${Date.now()}`).remove(`#item_${Date.now()}`)}
});
//добавление todo по enter
$(document).on('keydown',function(e) {
  if(e.which == 13) {
 func();
}
});
$('.del').click(function(){
  TodoList.forEach(function(item){
  if(item.todo === event.target){
    TodoList.splice(`#item_${Date.now()}`,1);
}
})});
//удаление






const taskRemove = function(){

  const id = $(this).closest("div").attr("id")
  if ($(this).attr("class")=="tasks-complete"){
  taskComplete();
  }
  else{
  $(this).closest(".tasks-list-container").remove();
  text[id]="";
  status[id]=false;
  taskCounter();
  task_num--;
  }
  }




/*
//создаю константу, куда записываю этот таск - 
cont deletedTask = TodoList.filter(obj => obj.id === deletedTask.id);
Затем нахожу индекс этого элемента в МассивеТасков - const deletedIndex = TodoList.indexOf(deletedIndex);
*/
  /*
  i++;
  j++;
  console.log(TodoList);
  const li = $(`
  <li id='remove_all' class='item_${j} elem'>
  <input id='lishka'  type='checkbox'> 
  <span> <img src='icon.png'></img></span>`
  +DeskTaskInput.val()+`
  </li>`)
const elems = document.querySelectorAll('.elem');
  li.on('click', function (event) {
    TodoList.checked = !TodoList.checked;
  });

  $('#todo').append(li);

/*
  console.log(TodoList[i]);
  elems.forEach(element => {
    if ($('body input:checkbox').is(':checked')) 
    {
    $(`li`).remove(`li`);
    }
  });
  $('#btn-off').click(element());
*/
/*
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
  if($('.item_${j}').is(':checked')) {
  $('.item_${j}').remove('.item_${j}');}
});*/
/*
if (checked=) */

/*function dell(){  
if ($('#').is(':checked')) {
 
  $(`.item_${j}`).remove(`.item_${j}`);
}
else {}
};
*/
/*
$('#btn-on').click(function(){
	$('body input:checkbox').prop('checked', true);
});

 $('#btn-off').click(function(){
  if($('.item_j').is(':checked')) {
  $('.item_j').remove('.item_j');
  }
});
*/
/*
function dell(){
  if ($('input').is(':checked')) {
   
    $(`li`).remove(`li`);
  }
  }; */
