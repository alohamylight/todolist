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
let func_delete = function(){
TodoList.forEach(function(item){
  if ($('li').closest('li').attr('id') == id )}}};
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
$(".task__delete").on('click', function (event){
  const id = $(this).closest("li").attr("class");
  func_delete();
});

