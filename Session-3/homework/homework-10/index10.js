console.log('Ex 10:');
let n = prompt('Enter name of people:');
let name = n.split(',');
let ten = [];
for (let i = 0; i<name.length; i++)
{
    ten.push('<' + name[i] +'>');
}
alert( `${name} => ${ten}`);