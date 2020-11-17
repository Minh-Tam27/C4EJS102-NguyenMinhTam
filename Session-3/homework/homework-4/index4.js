console.log('Ex 4:');
let shop = ['Jean', 'T-Shirt', 'Socks'];
console.log(shop);
let choose;
while(true)
{
    choose = prompt('Hi there, welcome to shop, what do you want (C,R,U,D)');
    if (choose == '' || choose == null)
    {
        break;
    }
    else
    {
    switch (choose)
    {
        case 'r':
            console.log ('The current items are:')
            for (let i=0; i<shop.length; i++)
            {
                console.log(`${i+1}`+ '. ' + `${shop[i]}`);
            }
            break;
        case 'c':
            let newItem = prompt('Enter name of new item:');
            shop.push(newItem);
            alert('Done');
            break;
        case 'u':
            let u = Number(prompt('Enter the position of item you wanna update:'));
            let itemUpdate = prompt('Enter new name:');
            shop[u-1] = itemUpdate;
            alert('Done');
            break;
        case 'd':
            let itemDelete = Number(prompt('Enter the position of item you wanna update:'));
            shop.splice(itemDelete-1,1);
            alert('Done');
            break;
        default:
            alert('This command is not supported');
            break;
    }
    }
}