console.log ('Ex 8.1:');
let sheeps = [5, 7, 300, 90, 24, 50, 75];
console.log ('Hello, my name is Minh Tâm and here is my sheep sizes:' + '\n' + sheeps);
console.log('Ex 8.2:');
let max = Math.max(...sheeps);
console.log ('Now my biggest sheep has size ' + max + '. Shave it!');
console.log('Ex 8.3:');
let index = sheeps.indexOf(max);
sheeps[index] = 8;
console.log ('After sharing, here is my flock' + '\n' + sheeps);
console.log('Ex 8.4:');
console.log ('MONTH 1');
for(let i=0; i<sheeps.length; i++)
{
    sheeps[i]+=50;
}
console.log('One month has passed, my sheeps have grown, here are their sizes'+ '\n' + sheeps);
console.log('Ex 8.5:');
max=Math.max(...sheeps);
console.log('Now my biggest sheep has size ' + max + '. Shave it!');
index = sheeps.indexOf(max);
sheeps[index] = 8;
console.log ('After sharing, here is my flock' + '\n' + sheeps);
console.log ('MONTH 2');
for(let i=0; i<sheeps.length; i++)
{
    sheeps[i]+=50;
}
console.log('One month has passed, my sheeps have grown, here are their sizes'+ '\n' + sheeps);
max=Math.max(...sheeps);
console.log('Now my biggest sheep has size ' + max + '. Shave it!');
index = sheeps.indexOf(max);
sheeps[index] = 8;
console.log ('After sharing, here is my flock' + '\n' + sheeps);
console.log ('MONTH 3');
for(let i=0; i<sheeps.length; i++)
{
    sheeps[i]+=50;
}
console.log('One month has passed, my sheeps have grown, here are their sizes'+ '\n' + sheeps);

console.log('Ex 8.6:');
let sum = 0;
for(let i =0; i<sheeps.length; i++)
{
    sum+=sheeps[i];
}
console.log('My flock has in total: ' + sum);
console.log('I would get ' + sum + '*2$ =' + sum*2 + '$');