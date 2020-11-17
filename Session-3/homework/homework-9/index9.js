console.log('Ex 9:');
clear()
function square() 
{
  var colors = ["red", "gray", "blue", "purple", "cyan"];
  for (var j=1; j<=4; j++)
  {
  for (var i=1; i <= 4; i++) {
    color(colors[j]);
    fd(50*j)
    rt(90)
  }
  }
}
square()