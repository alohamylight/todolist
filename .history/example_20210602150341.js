let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let counter = 0;


let delete__all =function(){
  TodoList.forEach(element => {
    if ($('body input:checkbox').is(':checked')) 
    {
      $(':checked').remove("div");
    }
    else {}
  })};
  const delete__all = function(){
    for (let i=0; i<text.length; i++){
      if ([i]==false){
        taskRemove(i);
      }
    }
  }



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

function MyFunc(){
  let OurTask=
    `<div class="div_container" id=`+counter+`><li class='li'>
      <input type='checkbox'> 
      <span class="tasks-list-container ">`+TodoList[counter]+`</span>
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


$("#todo").on("click","span",function(){
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