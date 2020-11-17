console.log('Ex 11:');
let a = prompt('Enter a sequence number:');
let s = a.split(',').map(s=>+s);
let odd = [];
for (let i=0; i<s.length; i++) {
    if (s[i] % 2 == 1) odd.push(s[i]);
}
alert(`${s} => ${odd}`);
