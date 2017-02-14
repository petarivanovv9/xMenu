'use strict';

// console.log("Connected!");

$(document).ready(function(){
  $('#signin-sub').click(function(event){
    event.preventDefault();
    // alert("before Ajax!");

    var email_tmp = $('#email').val();
    var pass = $('#password').val();

    $.ajax({
      type: "GET",
      url: "http://petarivanov.me/",
      // data: {
      //   'email': email_tmp,
      //   'password': pass,
      //   'submit':true
      // },
      success: function(result) {
          console.log( "success" );
          window.location.href = "index.html";
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // alert( "error" );
        console.log("Error, status = " + textStatus + ", " + "error thrown: " + errorThrown);
      }
    });

    // alert("after Ajax!");

  });


  $('#signup-sub').click(function(event){
    event.preventDefault();
    // alert("before Ajax!");

    var email_tmp = $('#email').val();
    var pass = $('#password').val();
    var pass2 = $('#password2').val();

    $.post('http://petarivanov.me/',
    {
      'email': email_tmp,
      'password': pass,
      'password2': pass2
    },
    function(data, status){
        console.log('data: ' + data + '\nStatus: ' + status);
    });
  });

    // alert("after Ajax!");

  // });


});
