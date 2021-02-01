onload = function() {
  var expr = new Expression('x');
  expr = expr.subtract(3);
  expr.add('x');
  console.log(expr.toString());
}