require.config({
    baseUrl: '/scripts/', // para no tener q poner scripts cada vez 
    paths: {
        'Movie' : 'app/Movie',
        'Director': 'app/Director',
        'jquery' : 'lib/jquery',
        'jquerymobile' : 'lib/jquerymobile',
    },
    shim: {
        'jquerymobile' : {
            deps:['jquery'],
            exports:'JQueryMobile'
        }
    }
});


require (['Movie','Director','jquerymobile'], function (Movie, Director){
    console.log('Test Movie: ');
    var terminator = new Movie();
    console.log(terminator);
    terminator.set('title','terminator');
    console.log('Title: ' + terminator.get('title'));

    var JamesCameron = new Director('JamesCameron');
    JamesCameron.addQuotes('Cast is everything.');
    JamesCameron.addQuotes('The movie is awesome.');
    console.log('Test Director Quotes: ');
    terminator.set('director', JamesCameron);
    terminator.get('director').speak();
    
});
