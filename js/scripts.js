var triangle = function(side1, side2, side3){
  if (side1 <= (side2 + side3) && side2 <= (side1 + side3) && side3 <= (side1 + side2)){
    if (side1 === side2 && side2 === side3 && side3 === side1) {
      return "This is an equilateral triangle.";
    }else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "This is an isosceles triangle.";
    } else {
      return "This is a scalene triangle.";
    }
  }
};

var isTriangle = function(side1, side2, side3){
  if (side1 <= (side2 + side3) && side2 <= (side1 + side3) && side3 <= (side1 + side2)){
    return "This is a triangle."
  } else {
    return "These sides do not make a triangle.";
  }
};
