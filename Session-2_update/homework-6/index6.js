let str = prompt('Enter a string:');
if (str == str.split('').reverse().join('')) {
    alert(str + ' is palindrome');
}
else {
    alert(str + ' is not palindrome');
}