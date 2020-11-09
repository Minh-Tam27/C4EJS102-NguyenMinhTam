console.log ('Ex 9:');
{
console.log ('a. Lower half and higher half of 6');
let dem = 0, count = 0;
for (let i=1; i<=6; i++)
{
    if (i<=3)
    {
        dem++;
    }
    else
    {
        count++;
    }
}
console.log (dem + 'L');
console.log (count + 'R');
}
{
console.log ('b. Lower half and higher half of n');
alert ('b. Lower half and higher half of n');
let n = prompt ('Enter n:');
console.log('n = '+n);
let dem = 0, count = 0;
for (let i=1; i<=n; i++)
{
    if (i<=n/2)
    {
        dem++;
    }
    else
    {
        count++;
    }
}
alert (dem + 'L');
alert (count + 'R');
console.log (dem + 'L');
console.log (count + 'R');
}
{
console.log ('c. 1 and 0: 8 times');
for (let i=1; i<=8; i++)
{
    console.log (`${0}`);
    console.log (`${1}`);
}
}
{
    console.log ('c. 1 and 0: n times');
    for (let i=1; i<=n; i++)
    {
        console.log (`${0}`);
        console.log (`${1}`);
    }
    }