$('#boton2').on('click', function(){
  $.ajax({
    type:'GET',
    url: 'http://bootcamp.aws.af.cm/movies',
    dataType: 'json',

    success: function(data){
      console.log('Data movies: ');
      console.log(data);
      var peli = data;
      for (var i=0; i<peli.d.results.length;i++){
        console.log('Currently at ' + peli.d.results[i].Synopsis);
      }

    },// fin succes

    error: function(data){
      console.log('error' + data);
    },//fin error

  });// fin .ajax
});