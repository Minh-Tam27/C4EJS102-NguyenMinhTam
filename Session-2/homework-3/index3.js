console.log ('Ex 3:');
{
console.log ('a. Print from 0 to 7 (no user input)' );
for (let i = 0; i<=7; i++)
{
    console.log (i);
}
}
{
console.log ('b. n numbers, starting from 0, n entered by user');
alert ('b. n numbers, starting from 0, n entered by user');
let n = Number(prompt ('b. Enter number:'));
console.log ('n = ' + n);
for (let i = 0; i<=n; i++)
{
    console.log(i);
}
}
{
console.log ('c. A sequence of numbers, starting from 3, ending before n, n entered by user');
alert ('c. A sequence of numbers, starting from 3, ending before n, n entered by user');
let n = Number(prompt ('c. Enter number:'));
console.log ('n = ' + n);
for (let i = 3; i<=n; i++)
{
    console.log(i);
}
}
{
console.log ('d. A sequence of numbers, starting from c, ending before n, c and n entered by user');
alert ('d. A sequence of numbers, starting from c, ending before n, c and n entered by user');
let c = Number(prompt('d. Enter start number:'));
let n = Number(prompt('d. Enter end number:'));
console.log ('c = ' + c + ' and n = '+ n);
for (let i=c; i<=n; i++)
{
    console.log(i);
}
}
{
console.log ('e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user');
alert ('e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user');
let c = Number(prompt('e. Enter start number:'));
let n = Number(prompt('e. Enter end number:'));
console.log ('c = ' + c + ' and n = '+ n);
for (let i=c; i<=n; i+3)
{
    console.log(i);
}
}
{
console.log ('f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user');
alert ('f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user');
let c = Number(prompt('f. Enter start number:'));
let n = Number(prompt('f. Enter end number:'));
let s = Number(prompt('f. Enter step number:'));
console.log ('c = ' + c + ', n = '+ n + ' and s ='+s);
for (let i=c; i<=n; i+s)
{
    console.log(i);
}
}