console.log('Ex 5:');
var s = prompt('Enter a squence of numbers, sperated by ","');
var a = s.split(',').map(a => +a)
let t=0;
for (let i=0; i<a.length; i++)
{
    t += a[i];
}
alert(t);