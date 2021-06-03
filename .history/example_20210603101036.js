let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let counter = 0;
let j=0;
let get = $(`#get_${j}`);
let status = [false];
let get__id= $("#get__get");





let massiv__delete = [];
let delete__all =function(){
    for (let i=0; i<TodoList.length; i++){
      if ($('body input:checkbox').is(':checked'))  
    {
     pam = get__id.val();
  
     massiv__delete.push(pam);
     massiv__delete.splice(pam,1);
     $("#todo").closest("li").remove("div");
     console.log(massiv__delete);
 
    }
    else {}

      }
    }




let TodoList = [];
  function func() {

    let newTodo = {
      todo: DeskTaskInput.val(),
      checked: false
    };
 
  TodoList.push(DeskTaskInput.val());
  DeskTaskInput.val('');
  MyFunc();
  let get =document.querySelector("#"get_${j}();
  get.onclick = function(event){
    const isCheck = get.checked;
    console.log(isCheck);
  };
};

function MyFunc(){
  let OurTask=
    `<div class="div_container" id=`+counter+`><li class='li'>
      <input type='checkbox' id='get_${j}'>
      <label for="get_${j}">pimpa</label> 
      <span class="tasks-list-container ">`+TodoList[counter]+`</span>
      <span class="task__delete"> <img src="icon.png"/> </span>
    </li></div>`;
    counter++;
    j++;
  $('#todo').prepend(OurTask);
  /*$(".task__delete").on('click', function (event){
    const id = $(this).closest("li").attr("class");
   console.log(id);
   if ($(this).attr("class")==id) {}
  })
  */
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


$("#todo").on("click","img",function(){
  const id = $(this).closest("div").attr("id");
  console.log(id);
  console.log(TodoList);
  TodoList.splice(id,1);
  console.log(TodoList);
  $(this).closest("div").remove();
})

$('#btn-off').click(delete__all);
/*
$('#btn-off').click(function(){
  if($(`#item_${Date.now()}`).is(':checked')){
  $(`#item_${Date.now()}`).remove(`#item_${Date.now()}`)}
});
*/

//функция нахождения checked'a
