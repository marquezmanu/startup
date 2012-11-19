$('#boton1').on('click', function(){

  $.mobile.showPageLoadingMsg("a", "Loading...");
  $(document).keydown(function(e) {
    // if escape is pressed the animation goes off
    if (e.keyCode == 27) {
       $.mobile.hidePageLoadingMsg();;
    }
  });

  $.ajax({
    type: 'GET',
    url: 'http://bootcamp.aws.af.cm/welcome/Manuel',
    dataType:'json',
                        
    success: function(data){
      //alert(data.response);
      $('#respuesta').html(data.response);
      highlight(data);
    },

    error: function(data){
      respuesta.style.color ='red';
      $('#respuesta').html('Error');
    },

  });
  
});

function highlight(data){
  var highlight=data.response.replace('Manuel!','<span style="background-color:yellow"> Manuel!</span>');
  $('#respuesta').html(highlight);

}
