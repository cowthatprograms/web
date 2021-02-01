var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({ id: 'graph1', latex: 'y=2x+1' });
calculator.setExpression({ id: 'graph2', latex: 'y=-\\frac{1}{2}x'});