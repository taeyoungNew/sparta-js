var obj1 = {
  outer: function() {
    var innerFunc = function() {
        console.log("Test = ", this)
    }
    innerFunc();
    
    var obj2 = {
        innerMethod: innerFunc
    };
    obj2.innerMethod();
  }  
}

obj1.outer();