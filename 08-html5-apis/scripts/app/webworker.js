$(document).ready(function(){
	var worker = new Worker('scripts/app/task.js');
	worker.onmessage = function(event) { 
		//console.log(event.data);
		$('#listmsg').append('<li> ' + event.data + '</li>');
	};
	worker.postMessage('Message from web worker each 60 seconds');

});