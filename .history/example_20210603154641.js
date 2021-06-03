let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let counter = 0;
let j=0;
let status = [false];
let get__id= $("#get__get");
let mass_checked= [];
let massiv__delete = [];

let state = {
  tasks: [],
}

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
 
  TodoList.push(newTodo);
  DeskTaskInput.val('');
  MyFunc();

};
let get = $(`#get_${j}`);
$('.list-group.pagination').on('click', get, function(event) {
  if (event.target.nodeName === "INPUT") {
    console.log(TodoList)
  }
  // const isCheck = get.checked;
//  massive.push($('input.radioListMode:checked').val());
});

let massive= []
function MyFunc(){
  let OurTask=
    `<div class="div_container" id=`+counter+`><li class='li page-item disabled '>
      <input type='checkbox' id='get_`+counter+`'>
      <label>`+TodoList[counter].todo+`</label>   
      <span class="task__delete"> <img src="icon.png"/> </span>
    </li></div>`;
    counter++;
  $('#todo').prepend(OurTask);
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
  TodoList.splice(id,1);
  $(this).closest("div").remove();
})

$('#btn-off').click(delete__all);

$("html").on("click","input",function(){
  if ($(this).closest("div").attr("class")=="div_container"){
    if($(this).attr("checked")=="checked"){
      alert("выключен");
    }
    else{
      alert("включен");
      var $id= ($(this).attr("id")).slice(-1);
      console.log($id);
      console.log(TodoList[$id].checked=true)
      console.log(TodoList)
    }
  }
})


/*
$('#btn-off').click(function(){
  if($(`#item_${Date.now()}`).is(':checked')){
  $(`#item_${Date.now()}`).remove(`#item_${Date.now()}`)}
});
*/

//функция нахождения checked'a

/*
  let t = TodoList[TodoList.length - 1];
  console.log(TodoList[TodoList.length - 1]);
  j++;
  massive.push($('input.radioListMode:checked').val());
  $('TodoList[TodoList.length - 1]')
  if ($('body input:checkbox').is(':checked')) {
  mass_checked.push(t);
    };
*/
  /*$(".task__delete").on('click', function (event){
    const id = $(this).closest("li").attr("class");
   console.log(id);
   if ($(this).attr("class")==id) {}
  })
  */
 function() {
if TodoList.newTodo.checked 
 };