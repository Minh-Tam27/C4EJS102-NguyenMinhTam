console.log ('Ex 5:');
let age = prompt ('How old are you?');
if (age <= 0)
{
    alert ('Please insert again');
}
else if (age < 14)
{
    alert ('You are not old enough to view this content');
}
else
{
    alert ('Enjoy!');
}