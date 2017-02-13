'use strict';

console.log("Connected!");

$(document).ready(function(){
  $('#signin-sub').click(function(){

    alert("HERE");

    var email_tmp = $('#email').val();
    var pass = $('#password').val();

  //   $.post('/jquery/submitData',
  //   {
  //     email: email_tmp,
  //     password: pass
  //   },
  //   function(data, status){
  //     if(data == 'success'){
  //       alert( "success" );
  //       window.location.href = "index.html";
  //     } else {
  //       alert( "error" );
  //       $('#error').text('error');
  //     }
  //     alert("bam");
  //   }, 'json');

  //  alert("BOOO");

  // });

    // $.get("demo_test.asp", function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status);
    // });

    $.ajax({
      type: "GET",
      url: "http://petarivanov.me/",
      // data: { 'submit':true },
      success: function(result) {
          alert('call back');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error, status = " + textStatus + ", " + "error thrown: " + errorThrown);
      }
    });

});
});
