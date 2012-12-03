self.onmessage = function(event) {
  // Do some work.
  setInterval(function(){self.postMessage(event.data)},60000);
};