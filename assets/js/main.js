'use strict';


$(document).ready(function(){
  $('#signin-sub').click(function(event){
    event.preventDefault();

    var email_tmp = $('#email').val();
    var pass = $('#password').val();

    var root = 'https://jsonplaceholder.typicode.com';

    $.ajax({
      type: "GET",
      url: root + '/posts/1',
      success: function(result) {
          console.log( "success" );
          window.location.href = "index.html";
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // alert( "error" );
        console.log("Error, status = " + textStatus + ", " + "error thrown: " + errorThrown);
      }
    });
  });


  $('#signup-sub').click(function(event){
    event.preventDefault();

    var email_tmp = $('#email').val();
    var pass = $('#password').val();
    var pass2 = $('#password2').val();

    var root = 'https://jsonplaceholder.typicode.com';

    $.post(root + '/posts',
    {
      username: "pepincho",
      email: email_tmp,
      password: pass,
      password2: pass2
    },
    function(data, status){
      if (status=="success")  {
        console.log( "success" );
        window.location.href = "index.html";
      } else {
        console.log( "error" );
        console.log('data: ' + data + '\nStatus: ' + status);
      }
    });
  });

});
