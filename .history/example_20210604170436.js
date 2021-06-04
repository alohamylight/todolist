let AddTaskBtn = $("#add");
let DeskTaskInput = $("#message");
let todo = $("#todo");
let get__id= $("#get__get");
let curPage =1;
// let i = 0;
let globalID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};
let state = {
  tasks: [],
}
let TodoList = [];


$('.add').on('click', function(){
  if (!DeskTaskInput.val().trim()) return;
  addNewTodoItem(DeskTaskInput.val().trim());
  renderAllTodos();
});

//добавление todo по enter
$(document).on('keydown',function(e) {
  if(e.which == 13) {
    if (!DeskTaskInput.val().trim()) return;
    addNewTodoItem(DeskTaskInput.val().trim());
    renderAllTodos();
  }
});

function addNewTodoItem(value) {
    if (!value) return;

    let newTodo = {
      title: value,
      checked: false,
      id: globalID()
    };
    TodoList.push(newTodo);
    DeskTaskInput.val('');
};
function renderAllTodos(){
  let todosHTML = ''
  TodoList.forEach((todo) => {
    todosHTML += `<div class="div_container" id="${todo.id}"><li class='li page-item disabled '>
      <input type='checkbox' class="todo-check" data-id="${todo.id}" ${todo.checked ? 'checked' : ''}>
      <label>${todo.title}</label>   
      <span class="task__delete"> <img src="icon.png"/> </span>
      </li></div>`;
  })
  updateCounters();
  
  $('#todo').html(todosHTML);

  let pageNumber = Math.ceil(TodoList.length / 5); 
  for(let i=1; i <= pageNumber; i++){

  }
  // if(TodoList.length % 5 == 0)
  // { i++;
  //   // createpage();
  // }
}
function createpage(){
  currpage = Math.ceil(TodoList.length/5);
  let NewPage = ''
  NewPage += `
  <ul class="list-group pagination" id="${i}">
  </ul>`
  $('#AllTodos').html(NewPage);

  
  }




$('#btn-on').click(function(){
	TodoList.forEach((todo) => {
    todo.checked = true;
  });
  renderAllTodos();
});

$('#btn-off').on('click', function(){
  TodoList = TodoList.filter((todo) => todo.checked == false);
  renderAllTodos();
});

$('#todo').on('click','.todo-check',function(event){
  let $currEl = $(event.currentTarget);
  let id = $currEl.data('id');
  let curTodo = TodoList.find((todo) => todo.id == id);
  curTodo.checked = !curTodo.checked;
  updateCounters();
})


function updateCounters(){
  let $active = $('.counter.active span');
  let $completed = $('.counter.completed span');
  let $all = $('.counter.all span');
  $all.html(TodoList.length);
  $completed.html(TodoList.filter((todo) => todo.checked == true).length);
  $active.html(TodoList.filter((todo) => todo.checked == false).length);
}


// $("html").on('click',".123", function(){
//   for (j = 0; j< TodoList.length; ++j) {
//   if(TodoList[j].checked == false)
//   {
//     TodoList[j].checked = true;
//     console.log(TodoList[j].checked);}
//   else {
//     TodoList[j].checked = false;
//     console.log(TodoList[j].checked)}
// }});
// let massive= []








// $('#btn-off').on('click', function(){
//   for (j = 0; j< TodoList.length; ++j) {
//     if(TodoList[j].checked == true)
//     {
//     console.log(TodoList[j]);
//     TodoList.splice(TodoList[j],1);
//     console.log(TodoList);
//     $(TodoList[j]).closest(TodoList[j]).remove(TodoList[j]);
//   }
// }});

// $("#todo").on("click","img",function(){
//   const id = $(this).closest("div").attr("id");
//   console.log(id);
//   TodoList.splice(id,1);
//   $(this).closest("div").remove();
// })



// $("html").on("click","input",function(){
//   if ($(this).closest("div").attr("class")=="div_container"){
//     if($(this).attr("checked")=="checked"){

//     }
//     else{
//       var $id= ($(this).attr("id")).slice(-1);

      
//     }
//   }

// })


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

/*let get = $(`#get_${j}`);
$('.list-group.pagination').on('click', get, function(event) {
  if (event.target.nodeName === "INPUT") {
    console.log(TodoList)
  }
  // const isCheck = get.checked;
//  massive.push($('input.radioListMode:checked').val());
});
*/