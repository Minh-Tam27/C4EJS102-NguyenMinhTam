let chan = 0;
let le = 0;
let n = prompt('enter n:');
if (n>=1)
{
    for(let i=1; i<=n; i++)
    {
        if(i%2 == 0)
        {
            chan += i;
        }
        else {
            le +=i;
        }
    }
    alert (`Sum of evens: ${chan} and sum of odds: ${le}`);
}