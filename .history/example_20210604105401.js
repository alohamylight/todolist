let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let counter = 0;
let j=0;
i=0;
let status = [false];
let get__id= $("#get__get");
let mass_checked= [];
let massiv__delete = [];

let state = {
  tasks: [],
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

  
  
  i++;
};
$(.123).on('click',function(event){var target = event.target;
	alert(target.tagName);} )


$("html").on('click',".123",function(){
  if(TodoList[i-1].checked == false)
  {
    TodoList[i-1].checked = true;
    console.log(TodoList[i-1].checked);}
  else {
    TodoList[i-1].checked = false;
    console.log(TodoList[i-1].checked)}
});
let massive= []
function MyFunc(){
  let OurTask=
    `<div class="div_container" id=`+counter+`><li class='li page-item disabled '>
      <input type='checkbox' class="123"id='get_`+counter+`'>
      <label>`+TodoList[counter].todo+`</label>   
      <span class="task__delete"> <img src="icon.png"/> </span>
    </li></div>`;
    counter++;
  $('#todo').prepend(OurTask);
  
};



$('#btn-on').click(function(){
	$('body input:checkbox').prop('checked', true);
});

$('#btn-off').on('click', function(){
  console.log(TodoList);
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



$("html").on("click","input",function(){
  if ($(this).closest("div").attr("class")=="div_container"){
    if($(this).attr("checked")=="checked"){

    }
    else{
      var $id= ($(this).attr("id")).slice(-1);

      
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
  /*$(".task__delete").on('click', function ( ){
    const id = $(this).closest("li").attr("class");
   console.log(id);
   if ($(this).attr("class")==id) {}
  })
  */

/*let get = $(`#get_${j}`);
$('.list-group.pagination').on('click', get, function(event) {
  if (event.target.nodeName === "INPUT") {
    console.log(TodoList)
  }
  // const isCheck = get.checked;
//  massive.push($('input.radioListMode:checked').val());
});
*/