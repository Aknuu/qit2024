let num1 = +prompt("birinshi san"); //5
let num2 = +prompt("ikinci san");  //3
let tanba = prompt("tanba"); //+ - * /

function calculator(a, b, t) {
  if (t == "+") {
    return a + b;
  }else if (t == "-"){
    return a - b;
  }else if(t=="*"){
    return a * b;
  }else if(t=="/"){

  }
}

var jauap = calculator(num1, num2, tanba);

alert(jauap);

// const constructor = (x,y,z) => {}

// alert(result = constructor(num1, num2, tanda) )
