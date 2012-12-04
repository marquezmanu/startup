$(document).ready(function(){

      // exercise 1 --> javascript code tester

      var input = document.getElementById('inputjs');
      var output = document.getElementById('outputjs');

      $('#runcode').on('click', function(){
        var result = eval(input.value);
        output.innerHTML = result;
      });
});