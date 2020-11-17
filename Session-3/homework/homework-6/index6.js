console.log('Ex 6:');
var s = prompt('Enter a squence of numbers, sperated by ","');
var a = s.split(',').map(a => +a)
var min = a[0];
for(let i=0; i<a.length; i++)
{
    if(min>a[i])
    {
        min = a[i];
    }
}
alert ('The smallest number is '+ `${min}`);