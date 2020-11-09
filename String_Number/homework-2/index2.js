let name = prompt('Your name?');
let age = prompt('Your age?');
if(age<18)
{
    alert(name + 'is not old enough to access this Website');
}
else if (age>=18)
{
    let choose = prompt('Do you want to access this Web? ');
    if (choose == 'yes')
    {
        alert(name + ' accessing this Web');
    }
    else if (choose == 'no')
    {
        alert(name + ' out of Web');
    }
    else
    {
        alert('Please insert again');
    }
}
else
{
    alert('Please insert again');
}