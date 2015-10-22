var isTriangle = function(side1, side2, side3){
  if (side1 <= (side2 + side3) && side2 <= (side1 + side3) && side3 <= (side1 + side2)){
    return "This is a triangle."
  } else {
    return "These sides do not make a triangle.";
  }
};

var triangleType = function(side1, side2, side3){
    if (side1 === side2 && side2 === side3 && side3 === side1) {
      return "This is an equilateral triangle.";
    }else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "This is an isosceles triangle.";
    } else {
      return "This is a scalene triangle.";
    }
};

$(document).ready(function(){
  $("form#blanks").submit(function(event){

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = isTriangle(side1, side2, side3);

    $("#display").show(triangleType);

    event.preventDefault();

  });

})
