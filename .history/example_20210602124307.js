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
//функциональное выражение
//конец функцонального выражение
function MyFunc(){
  $('#todo').html("");
  TodoList.forEach(function(item){
  let OurTask=
    `<li class='li_${Date.now()}'>
      <input type='checkbox' id='item_${Date.now()}' ${item.checked ? 'checked': ''}> 
      <span class="tasks-list-container ">${item.todo}</span>
      <span class="task__delete"> <img src="icon.png"/> </span>
    </li>`;

  $('#todo').append(OurTask);
  
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
