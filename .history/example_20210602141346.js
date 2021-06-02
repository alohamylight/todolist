let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let counter = 0;

let TodoList = [];
  function func() {

    let newTodo = {
      todo: DeskTaskInput.val(),
      checked: true
    };
  
  TodoList.push(DeskTaskInput.val());
  console.log(TodoList);
  DeskTaskInput.val('');
  MyFunc();
};
//функциональное выражение
/*let function__delete = function(){
  TodoList.forEach(function(item){
  if ($('li').closest('li').attr('id')= id )})};
  */

//конец функцонального выражение
/*
function MyFunc(){
  $('#todo').html("");
  TodoList.forEach(function(item){
  let OurTask=
    `<li class='li_${Date.now()}'>
      <input type='checkbox' id='item_${counter}' ${item.checked ? 'checked': ''}> 
      <span class="tasks-list-container ">${item.todo}</span>
      <span class="task__delete"> <img src="icon.png"/> </span>
    </li>`;
    counter++;

  $('#todo').append(OurTask);
  $(".task__delete").on('click', function (event){
    const id = $(this).closest("li").attr("class");
   console.log(id);
   if ($(this).attr("class")==id) {}
  })
  
});

};
*/
function MyFunc(){
  let OurTask=
    `<div class="div_container" id='${counter}'><li class='li}'>
      <input type='checkbox'> 
      <span class="tasks-list-container ">`+TodoList[counter]+`</span>
      <span class="task__delete"> <img src="icon.png"/> </span>
    </li><button class="btn"></button></div>`;
    counter++;

  $('#todo').prepend(OurTask);
  /*$(".task__delete").on('click', function (event){
    const id = $(this).closest("li").attr("class");
   console.log(id);
   if ($(this).attr("class")==id) {}
  })
  
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
/*
$('.del').click(function(){
  TodoList.forEach(function(item){
  if(item.todo === event.target){
    TodoList.splice(`#item_${Date.now()}`,1);
}
})});
*/











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
$("#todo").on("click","button",function(){
  const id = $(this).closest("div").attr("id");
  console.log(id);
})