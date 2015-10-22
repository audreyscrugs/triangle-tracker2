describe("isTriangle" , function() {
  it("determines if 3 sides create a valid triangle", function() {
    expect(isTriangle(2,2,8)).to.equal("These sides do not make a triangle.")
  });
});

describe("triangleType" , function(){
  it("determines if 3 sides make an equilateral triangle", function(){
    expect(triangleType(2,2,2)).to.equal("This is an equilateral triangle.")
  });
  it("determines if 3 sides make an isosceles triangle", function(){
    expect(triangleType(4,4,2)).to.equal("This is an isosceles triangle.")
  });
  it("determines if 3 sides make a scalene triangle", function(){
    expect(triangleType(4,3,2)).to.equal("This is a scalene triangle.")
  });
});
