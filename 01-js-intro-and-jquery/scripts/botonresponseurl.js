$('#boton1').on('click', function(){
  $.ajax({
    type: 'GET',
    url: 'http://bootcamp.aws.af.cm/welcome/Manuel',
    dataType:'json',
                        
    success: function(data){
      alert(data.response);
      $('#respuesta').html(data.response);
      highlight(data);
    },

    error: function(data){
      respuesta.style.color ='red';
      $('#respuesta').html('Error');
    },

  });
  
})

function highlight(data){
  var highlight=data.response.replace('Manuel!','<span style="background-color:yellow"> Manuel!</span>');
  $('#respuesta').html(highlight);

}
