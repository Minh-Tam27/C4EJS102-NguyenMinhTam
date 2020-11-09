console.log ('Ex 7:')
let n = prompt('Enter n:');
let x = prompt('Enter x:');
if (x<0 || x>n)
{
    alert ('Please insert again');
}
else if (x < n/2)
{
    alert ('Lower half of ' + n);
}
else if (x <= n)
{
    alert ('Higher half of ' + n);
}