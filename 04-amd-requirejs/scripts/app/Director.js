define ('Director',function(){
	
	var Director = function(name){
		this.name=name;
		this.quotes=[];

		this.addQuotes = function (quote){
			this.quotes.push(quote);
		};

		this.speak = function(){
			console.log(this.name+' says: ');
			$('#quotes').append(this.name+'<span> says: </span>');
			for (var i=0; i < this.quotes.length; i++){
				console.log(this.quotes[i]);
				$('#quotes').append('<p><strong>'+this.quotes[i]+'</strong></p>');
			};
		};
	}

	return Director;
});