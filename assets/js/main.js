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
          alert( "success" );
          window.location.href = "index.html";
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // alert( "error" );
        alert("Error, status = " + textStatus + ", " + "error thrown: " + errorThrown);
      }
    });

    // alert("after Ajax!");

  });
});
