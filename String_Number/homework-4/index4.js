let name = prompt('Your name:');
let month = prompt('Your month of birth:');
switch (month)
{
    case '1': 
    case '2': 
    case '3':
    {
    alert(name + ' was born in Spring');
    break;
    }
    case '4': 
    case '5': 
    case '6':
    {
    alert(name + ' was born in Spring');
    break;
    }
    case '7': 
    case '8': 
    case '9':
    {
    alert(name + ' was born in Autumn');
    break;
    }
    case '10': 
    case '11': 
    case '12':
    {
    alert(name + ' was born in Winter');
    break;
    }
    default:
    {
    alert('Invaild input');
    }
}