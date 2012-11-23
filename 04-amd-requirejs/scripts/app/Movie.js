// 'define' tiene como primer argumento el nombre del modulo, segundo argumento un array de las
// dependecias que necesite y su tercer modulo el contenido, que es una funcion que recibe de 
// parametros las dependencias.. define(nombreModulo, dependencias, contenido);
define('Movie',['Director'], function(Director){

    function Movie (){
      this.attributes = {}
    };

    Movie.prototype.play = function (){
      this.Notify('Playing ',this.attributes['title']);
    };
    Movie.prototype.stop = function (){
      this.Notify('Stopped ',this.attributes['title']);
    };
    Movie.prototype.set = function (attr, value){
      this.attributes[attr] = value;
    };
    Movie.prototype.get = function (attr){
      return (this.attributes[attr]);
    };
    
    Movie.prototype.AddObserver = function(observer){
      this.observers.push(observer);
    };
    Movie.prototype.Notify = function(event, name){
      var m_count = this.observers.length;
      for( var i = 0; i < m_count; i++ )
        this.observers[i].Update(event, name);
    };
    

    return Movie; // devuelve la funcion construccion de Movie para que pueda ser usada por 
                  // otros modulos
});