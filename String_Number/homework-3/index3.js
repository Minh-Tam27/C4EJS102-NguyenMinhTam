let un = 'minhTam';
let pw = '100617';
let username = prompt('User name:');
let password = prompt('Password:');
if (username == un && password == pw)
{
    alert('Log in successfully');
}
else if (username !== un)
{
    alert('User name is wrong!');
}
else
{
    alert('Password is wrong!');
}