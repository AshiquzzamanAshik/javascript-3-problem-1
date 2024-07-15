// This is problem solving-Q-1
function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";
      const constVariable = "I am const";
    }
   
  }
  scopeTest();
  // sum name variable is not defined (let & const) variable a
  console.log(varVariable);  // I am ver
  console.log(letVariable);  // letVariable is not defined (ReferenceError)
  console.log(constVariable);// constVariable is not defined (ReferenceError)
  

  

