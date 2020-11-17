const phoneList = [
    {
        name: "Peter",
        phone: "0973712312"
    },
    {
        name: "Tony",
        phone: "098123321"
    }
];
let choose;
while (true) {
    choose = prompt('Hi there, what do you want (C,R,U,D)');
    if (choose == '' || choose == null) {
        break;
    }
    else {
        switch (choose) {
            case 'c':
                let newItem = {};
                newItem['name'] = prompt('Enter name:');
                newItem['phone'] = prompt('Enter phone number:');
                phoneList.push(newItem);
                alert(newItem.name + ': ' + newItem.phone);
                break;
            case 'r':
                function myFunc() {
                    for (let i in phoneList) {
                        alert(phoneList[i].name + ': ' + phoneList[i].phone);
                    }
                }
                break;
            case 'u':
                let findName = prompt('Enter name you wanna update:');
                for (let i = 0; i < phoneList.length; i++) {
                    if (findName == phoneList[i].name) {
                        phoneList[i].name = prompt('Enter new name:');
                        phoneList[i].phone = prompt('Enter new phone number');
                        myFunc();
                        break;
                    }
                    else {
                        alert('Not find out this contact');
                    }
                }
                break;
            case 'd':
                let itemDelete = prompt('Enter name you wanna delete:');
                for (let i = 0; i < phoneList.length; i++) {
                    if (itemDelete == phoneList[i].name) {
                        phoneList.splice(itemDelete, 1);
                        alert('Delete successfully');
                        myFunc();
                        break;
                    }
                    else {
                        alert('Not find out this contact');
                    }
                }
                break;
            case 'e':
                break;
            default:
                alert('This command is not supported');
        }
    }
}