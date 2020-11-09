let choose = prompt('Do you want to continue?');
while (choose = 'yes')
{
let str = prompt('Let insert a string:');
let res = str.split("");
let a = res.reverse();
let newstr = a.join("");
console.log(newstr);
}