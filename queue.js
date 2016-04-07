var Queue = function() {
  this.data = [];
  // implement your Queue constructor here
};

Queue.prototype.enqueue = function(item) {
  // implement enqueue
  return this.data.unshift(item);
};

Queue.prototype.dequeue = function() {
  // implement dequeue
  return this.data.pop(item);
};

Queue.prototype.peek = function(){
return this.data.[this.data.length - 1];
};

Queue.prototype.size = function() {
  return this.data.length; // the size of the queue
};