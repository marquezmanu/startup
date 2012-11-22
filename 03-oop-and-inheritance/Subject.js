function Subject()
{
   this.observers = new ObserverList();
}

Subject.prototype.Notify = function(event, name)
{
   var m_count = this.observers.Count();
            
   for( var i = 0; i < m_count; i++ )
      this.observers.GetAt(i).Update(event, name);
}

Subject.prototype.AddObserver = function( observer )
{
   this.observers.Add(observer);
}

Subject.prototype.RemoveObserver = function( observer )
{
   this.observers.RemoveAt(this.observers.IndexOf( observer, 0 ));
}