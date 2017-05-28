$(function(){
  updateTable();
  printCurrentUser();
});


// Make preview work. Begine.
$("input[name='previewTask']").on('click', function(){
  var task = $("input[name='task']").val(), 
      name = $("input[name='name']").val(),
      email = $("input[name='email']").val();
  $("tbody").prepend("<tr><td>"+task+"</td><td>"+name+"</td><td>"+email+"</td><td>"+"</td><td>mark as done</td></tr>");
});
// Make preview work. End.




function ajaxCheck(id){
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari  
    xmlhttp = new XMLHttpRequest();
  } else {// code for IE6, IE5  
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(id).innerHTML = this.responseText;
    }
  }; 
}

function updateTable(){
  ajaxCheck("table");
  xmlhttp.open("POST","print_table.php",true);
  xmlhttp.send();
};

function updateUser(){
  ajaxCheck("topPanel");
  xmlhttp.open("POST","login.php",true);
  xmlhttp.send();  
}



// Edit and delete tasks. Begine.
function markTaskAsDone(taskId){
  $.ajax({
    type: "POST",
    url: 'markTaskAsDone.php',
    data:{taskId: taskId},
    success:function(html) {
      alert("this task is done");
      updateTable();
    }
  });
}

function removeTask(taskId){
  $.ajax({
    type: "POST",
    url: 'removeTask.php',
    data:{taskId: taskId},
    success:function(html) {
      alert("this task is removed");
      updateTable();
    }
  });
}

function editTask(taskId){
  //1. Get data with this id from db.
  //2. Put this data in input fields.
  //3. Onsubmit compare with values from db.
  //4. If smth is different - update table.
}
// Edit and delete tasks. End.


// Pagination. Begine. This code doesn't work.
function doPagination(){
  $(this).toggleClass("active");
}
// Pagination. End.


//Sort set. Begine.
$(".sortByStatus").on('click', function(){
  $.ajax({
    type: "POST",
    url: 'sortByStatus.php',
    data:{action:'call_this'},
    success:function(html) {
      sortByStatus();
    }
  });
});

$(".sortByEmail").on('click', function(){
  $.ajax({
    type: "POST",
    url: 'sortByEmail.php',
    data:{action:'call_this'},
    success:function(html) {
      sortByEmail();
    }
  });
});

$(".sortByName").on('click', function(){
  $.ajax({
    type: "POST",
    url: 'sortByName.php',
    data:{action:'call_this'},
    success:function(html) {
      sortByName();
    }
  });
});


function sortByName(){
  ajaxCheck("table");
  xmlhttp.open("POST","sortByName.php",true);
  xmlhttp.send();  
}

function sortByEmail(){
  ajaxCheck("table");
  xmlhttp.open("POST","sortByEmail.php",true);
  xmlhttp.send();  
}

function sortByStatus(){
  ajaxCheck("table");
  xmlhttp.open("POST","sortByStatus.php",true);
  xmlhttp.send();  
}
// Sort set. End.

// Operations with tasks. Begine.
$("#addTaskForm").submit(function(event) {
  event.preventDefault();
  /* get the action attribute from the <form action=""> element */
  var $addTaskForm = $(this), url = $addTaskForm.attr('action');
  var addTask = $.post( url, { 
    task: $("input[name='task']").val(), 
    name: $("input[name='name']").val(),
    email: $("input[name='email']").val(),
    img: $("input[type='file']").val()
  } );
  addTask.done(function( data ) {
    alert('success');
    updateTable();
    $("#addTaskForm > div > div > input, input[type='file']").val('');
  });
});
// Operations with tasks. End.


// Login. Begine.
$("#LoginForm").submit(function(event) {
  event.preventDefault();
  /* get the action attribute from the <form action=""> element */
  var $LoginForm = $(this), url = $LoginForm.attr('action');
  var postUserData = $.post( url, { 
    login: $("input[name='login']").val(), 
    password: $("input[name='password']").val()
  });
  postUserData.done(function( data ) {
    alert('login success '+ $("input[name='login']").val()+" pass is "+$("input[name='password']").val());
    updateUser();
  });
});


$("#loginButton").on("click", function(){
  $("#loginWell").css({'display':'block'});
});
$("#cancelLogin").on("click", function(){
  $("#loginWell").css({'display':'none'});
});

// Login. End.



//Style for 'browse' button. Begine.
$(document).on('click', '.browse', function(){
  var file = $(this).parent().parent().parent().find('.file');
  file.trigger('click');
});
$(document).on('change', '.file', function(){
  $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
});
//Style for 'browse' button. End.