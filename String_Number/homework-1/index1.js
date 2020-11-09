let gt = 1;
let a = Number(prompt('Enter a number:'));
if (a >= 0)
{
    for(let i=1; i<= a; i++)
    {
        gt*=i;
    }
alert('The factorial is ' + `${gt}`);
}
else
{
    alert('Invalid input');
}