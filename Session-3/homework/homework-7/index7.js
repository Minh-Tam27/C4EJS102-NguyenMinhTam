console.log('Ex 7:');
let a = [2,3,9,11,98];
let i = prompt('Enter a number');
    if (a.indexOf(Number(i))==-1)
    {
    alert(`${i}` + ' is not FOUND is my array');
    }
    else 
    {
    alert(`${i}` + ' is FOUND is my array at index ' + `${a.indexOf(Number(i))}`);
    }