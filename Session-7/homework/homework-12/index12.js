console.log('Ex 12:');
let td = document.getElementsByTagName('td');
let items = [];
  for(var i=0; i<td.length; i++)
  {
    items.push(td[i].innerText);
  }
console.log('12.1:')
console.log(items);

let li = document.getElementsByTagName('li');
let itemsUl = [];
  for(var x=0; x<li.length; x++)
  {
    itemsUl.push(li[x].innerText);
  }
console.log('12.2:')
console.log(itemsUl);

let ul = document.getElementById('item_list_ul');
console.log('12.3');
console.log(ul);

for(var t=0; t<td.length; t++){
  let newli = document.createElement('li');
  newli.innerText = td[t].innerText;
  ul.appendChild(newli);
}
console.log('12.4:');
console.log(ul);

let newItem = document.getElementById('input');
let addBtn = document.getElementById('add-btn');