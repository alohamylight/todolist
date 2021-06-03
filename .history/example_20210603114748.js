let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let counter = 0;
let j=0;
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
  let get = $(`#get_${j}`);
  $('html').on('click',get, function(event){
    const isCheck = get.checked;
    massive.push($('input.radioListMode:checked').val());
    console.log(isCheck);
  })
  console.log(TodoList[TodoList.length - 1])
  j++;
  massive.push($('input.radioListMode:checked').val());
  $('TodoList[TodoList.length - 1]')
  if ($('body input:checkbox').is(':checked')) {
    
  }

};
let massive= []
function MyFunc(){
  let OurTask=
    `<div class="div_container" id=`+counter+`><li class='li page-item disabled '>
      <input type='checkbox'  class='radioListMode' id='get_${j}'>
      <label for='get_${j}'>`+TodoList[counter]+`</label>   
      <span class="task__delete"> <img src="icon.png"/> </span>
    </li></div>`;
    counter++;
  $('#todo').prepend(OurTask);
  /*$(".task__delete").on('click', function (event){
    const id = $(this).closest("li").attr("class");
   console.log(id);
   if ($(this).attr("class")==id) {}
  })
  */
  console.log(massive);
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
