describe("triangle" , function() {
  it("determines if 3 sides create a valid triangle", function() {
    expect(triangle(2,2,8)).to.equal("These sides do not make a triangle.")
  });

  it("determines if 3 sides make an equilateral triangle", function(){
    expect(triangle(2,2,2)).to.equal("This is an equilateral triangle.")
  });
  it("determines if 3 sides make an isosceles triangle", function(){
    expect(triangle(4,4,2)).to.equal("This is an isosceles triangle.")
  });
  it("determines if 3 sides make a scalene triangle", function(){
    expect(triangle(4,3,2)).to.equal("This is a scalene triangle.")
  });
});
