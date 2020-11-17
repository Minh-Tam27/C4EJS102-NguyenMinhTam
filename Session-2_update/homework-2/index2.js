var n = prompt('Enter a number:');
if (n<2)
{
    alert(`${n} is not prime`);
}
var a = Math.sqrt(n);
var count=0;
for (let i = 2; i<=a; i++)
{
    if(n%i == 0)
    {
        count++;
    }
}
    if (count == 0)
    {
        alert(`${n} is prime`);
    }
    else 
    {
        alert(`${n} is not prime`);
    }