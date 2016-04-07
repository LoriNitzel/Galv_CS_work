var Stack = function(data){
  this.data = [];
};
Stack.prototype.pop = function(data){
  return this.data.shift(data);
  //some method to remove data
};
Stack.prototype.push = function(data){
  return this.data.unshift(data);
  //some method to add data
};
Stack.prototype.peek = function(data){
  return this.data[this.data.length - 1];
// or this.data[0];
  // return the top item of the stack
};
Stack.prototype.isEmpty = function(data){
  return this.data.length === 0; 
};

