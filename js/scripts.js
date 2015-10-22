var triangle = function(side1, side2, side3){
  if (side1 <= (side2 + side3) && side2 <= (side1 + side3) && side3 <= (side1 + side2)){
    return "This is a triangle."
  } else {
    return "These sides do not make a triangle."
  }
}
