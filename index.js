function Point(i,j){
  this.x = i;
  this.y = j;
}
Point.prototype.toString = function(){
  return '(' + this.x + ', ' + this.y + ')';
}

function Side(l){
  this.length = l;
}

function Shape(){

}

Shape.prototype.addToPlane = function(i,j){
  this.position = new Point(i,j);
}
Shape.prototype.move = function(i,j){
  this.position.x = i;
  this.position.y = j;
}

function Circle(r){
  Shape.call(this);
  this.radius = r;
}
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.diameter = function(){
  return 2 * this.radius;
}
Circle.prototype.area = function(){
  return Math.PI * this.radius * this.radius;
}
Circle.prototype.circumference = function(){
  return this.radius * Math.PI * 2;
}

function Polygon(sideArray){
  Shape.call(this);
  this.sides = sideArray;
}
Polygon.prototype = Object.create(Shape.prototype);

Polygon.prototype.numberOfSides = function(){
  return this.sides.length;
}
Polygon.prototype.perimeter = function(){
  return this.sides.reduce(function(a, b){
      return a + b.length;
  },0);
}

function Quadrilateral(side1, side2, side3, side4){
  Polygon.call(this, side1, side2, side3, side4);
  this.sides = [side1, side2, side3, side4];
}
Quadrilateral.prototype = Object.create(Polygon.prototype);

Quadrilateral.prototype.perimeter = function(){
  return this.sides.reduce(function(a, b){
      return a + b;
  },0);
}

function Rectangle(width, height){
  Quadrilateral.call(this, width, height);
  this.width = width;
  this.height = height;
  this.sides = [width, width, height, height];
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);


Rectangle.prototype.area = function(){
  return this.width * this.height;
}

function Square(sideLength){
  Rectangle.call(this, sideLength);
  this.sides = [sideLength, sideLength, sideLength, sideLength];
  this.width = sideLength;
  this.height = sideLength;
}
Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.listProperties = function(){
  return Object.getOwnPropertyNames(this).join(" ");
}

function Triangle(side1, side2, side3){
  Polygon.call(this, side1, side2, side3);
  this.sides = [side1, side2, side3];
}
Triangle.prototype = Object.create(Polygon.prototype);

Triangle.prototype.perimeter = function(){
  return this.sides.reduce(function(a, b){
      return a + b;
  },0);
}
