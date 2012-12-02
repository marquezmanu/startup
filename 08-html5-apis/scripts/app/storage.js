// exercise 2 --> browser’s storage
$(document).ready(function(){

		var input = document.getElementById('inputjs');
      savecode.addEventListener('click', function () {
        window.localStorage.setItem('value', input.value);
        window.localStorage.setItem('timestamp', (new Date()).getTime());
      }, false);

      input.value = window.localStorage.getItem('value');
  });