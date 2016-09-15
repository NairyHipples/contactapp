$(document).ready(function(){

  $('.edit').click(function(){
    if ($('#add').prop('disabled', false)){
      $('#add').prop('disabled', true);
    }
  });
  $('#update, #clear').click(function(){
    if ($('#add').prop('disabled', true)){
      $('#add').prop('disabled', false);
    }
  });
  // $('.edit').click(function(){
  //   if($('#add').is(":visible")){
  //     $('#add').hide();
  //     $('#update, #clear').show();
  //
  //   } else if ($('#update, #clear').is(":visible")){
  //     $('#add').hide();
  //     $('#update, #clear').show();
  //
  //   }
  //
  // });
  // $('#clear').click(function(){
  //   $('#update, #clear').hide();
  //   $('#add').show();
  //   console.log("clear clicked");
  //
  // });
  // $('#update').click(function(){
  //   $('#update, #clear').hide();
  //   $('#add').show();
  //   console.log("update clicked");
  //
  // });
});
