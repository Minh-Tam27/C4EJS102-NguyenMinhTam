var n = prompt('Enter a number:');
var a = Math.sqrt(n);
var arr = [];
for (var i = 1; i < n; i++)
{
    var count = 0;
    for (var j = 2; j <= a; j++)
    {
        if (i%j == 0)
        {
            count++;
        }
    }
    if (count == 0)
        {
            arr.push[j];
            console.log(arr);
        }
}