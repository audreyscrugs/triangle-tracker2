describe("triangle" , function() {
  it("determines if 3 sides create a valid triangle", function() {
    expect(triangle(2,2,8)).to.equal("These sides do not make a triangle.")
  });
});
