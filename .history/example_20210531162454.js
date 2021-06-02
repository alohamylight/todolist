let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let chbox;  

let TodoList = [];
  function func() {

    let newTodo = {
      todo: DeskTaskInput.val(),
      checked: false
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
      <span>${item.todo}</span>
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
function dell(){
  TodoList.forEach(function(item){
  if(item.todo === event.target.innerHTML){
    TodoList.splice(`#item_${Date.now()}`,1);
}
})};

$('#btn-off').click(function(){
  if($(`#item_${Date.now()}`).is(':checked')) {
  $(`#item_${Date.now()}`).remove(`#item_${Date.now()}`);
  }
















  