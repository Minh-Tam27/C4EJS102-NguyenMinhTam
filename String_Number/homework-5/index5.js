let choose = prompt ('Bạn có muốn tiếp tục chương trình không?');
while (choose == 'yes')
{
let a = Number(prompt('a:'));
let b = Number(prompt('b:'));
let c = Number(prompt('c:'));
if (a == 0)
{
    if (b == 0)
    {
        if (c == 0)
        {
            alert('Phương trình vô số nghiệm');
        }
        else
        {
            alert('Phương trình vô nghiệm');
        }
    }
    else
    {
        alert('Phương trình có nghiệm x = ' + `${-c/b}`);
    }
}
else
{
    let delta = b*b - 4*a*c;
    alert(delta);
    if (delta > 0)
    {
        let can = Math.sqrt(delta);
        alert (`Phương trình có 2 nghiệm phân biệt: x1 = ${(-b-can)/2*a} và x2 = ${(-b+can)/2*a}`  );
    }
    else if (delta = 0)
    {
        alert (`Phương trình có 1 nghiệm kép x1 = x2 = ${-b/2*a}`);
    }
    else
    {
        alert ('Phương trình vô nghiệm');
    }
}
}
